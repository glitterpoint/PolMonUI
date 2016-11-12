/**
 * Created by Surya on 11/5/2016.
 */
import {Component, }          from '@angular/core';
import {Device}             from './device'
import {DeviceService}      from './devices.service';
import {DeviceMapMarker}    from './device-marker';

@Component({
    moduleId: module.id,
    selector:'devices-location-map',
    templateUrl:'device.html',
    providers:[DeviceService]
})
// GOOGLE MAPS API KEY: AIzaSyAf-Zu4il008oTjbMmbJm_uUnWq-1DJMuY
export class DevicesComponent{

    title = 'Sensors locations';
    zoom: number = 10;
    rootLat: number;
    rootLng: number;
    devices: Device[] ;
    deviceMapMarkers: DeviceMapMarker[];
    constructor(private deviceService:DeviceService ){

    }
    ngOnInit():void{
        this.deviceService.getDevices()
        .subscribe(
            devices => {
                this.devices = devices;
                this.deviceMapMarkers = [];
                if(this.devices.length > 0){
                    this.rootLat = this.devices[0].Location.points[0].x;
                    this.rootLng = this.devices[0].Location.points[0].y;
                }
                var switchFlag = false;
                var divMapMarker;
                this.devices.forEach(device => {
                    divMapMarker            = new DeviceMapMarker() ;
                    divMapMarker.deviceId   = device.Id;
                    divMapMarker.x          = device.Location.points[0].x;
                    divMapMarker.y          = device.Location.points[0].y;
                    divMapMarker.info       = {
                                                title : device.Name,
                                                description: device.Description
                                                };

                    //Add latest values from this device.
                    divMapMarker.info.sensorReadings = [];

                    // This is just for the sake of displaying different images.
                    if(switchFlag){
                        divMapMarker.iconUrl = '../img/sensor_gn.png';
                    }
                    else{
                        divMapMarker.iconUrl = '../img/sensor_rd.png';
                    }

                    this.deviceMapMarkers.push(divMapMarker);
                    switchFlag = !switchFlag;

                });

            });
    }

    markerClick(dm :DeviceMapMarker):void{
        console.log('Device map marker clicked. object:');
        console.log(dm);

        this.deviceService.getTopTelemetry(dm.deviceId)
            .subscribe(
            telemetry => {
                dm.info.sensorReadings = [];
                console.log('telemetry from api:')
                console.log(telemetry);
                console.log('Current sensor readings in device map marker object ')
                console.log(dm.info.sensorReadings);
                var index = 1;
                    telemetry.forEach(t => {
                        dm.info.sensorReadings.push({id: index, name:t.Name, value: t.Value, createdOn: t.CreatedOn});
                        index++;
                    });



            }
        );



    }

}


