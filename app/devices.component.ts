/**
 * Created by Surya on 11/5/2016.
 */
import {Component} from '@angular/core';

@Component({
    selector:'devices-location-map',
    template:'<h2>plug in google map here.</h2>' +
    '<sebm-google-map>' +
        '<sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>' +
        '<sebm-google-map-marker [latitude]="17.3589256" [longitude]="78.5412585"></sebm-google-map-marker>' +
    '</sebm-google-map>'
})
// GOOGLE MAPS API KEY: AIzaSyAf-Zu4il008oTjbMmbJm_uUnWq-1DJMuY
export class DevicesComponent{
    lat: number = 17.4325101;
    lng: number = 78.4554811;
}