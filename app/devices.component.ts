/**
 * Created by Surya on 11/5/2016.
 */
import {Component}          from '@angular/core';
import {Device}             from './device'
import {DeviceService}      from './devices.service';



interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    icon?: string;
}

@Component({
    moduleId: module.id,
    selector:'devices-location-map',
    templateUrl:'device.html',
    providers:[DeviceService],
})
// GOOGLE MAPS API KEY: AIzaSyAf-Zu4il008oTjbMmbJm_uUnWq-1DJMuY
export class DevicesComponent{
    title = 'Sensors locations';
    zoom: number = 10;
    rootLat: number;
    rootLng: number;
    devices: Device[] ;

    constructor(private deviceService:DeviceService){

    }
    ngOnInit():void{
        this.deviceService.getDevices()
        .subscribe(
            devices => {
                this.devices = devices;
                if(this.devices.length > 0){
                    this.rootLat = this.devices[0].Location.points[0].x;
                    this.rootLng = this.devices[0].Location.points[0].y;
                }
            });
    }
}


