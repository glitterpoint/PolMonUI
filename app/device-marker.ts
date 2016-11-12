/**
 * Created by surya on 11/10/16.
 */

export class DeviceMapMarker{
    deviceId: string;
    x: number;
    y: number;
    iconUrl: string;
    info:{
        title: string;
        description: string;
        sensorReadings: SensorReading[];
    }
}

export class SensorReading{
    name: string;
    value: number;
    createdOn: Date;
}