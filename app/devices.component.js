"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Surya on 11/5/2016.
 */
var core_1 = require('@angular/core');
var DevicesComponent = (function () {
    function DevicesComponent() {
        this.lat = 17.4325101;
        this.lng = 78.4554811;
    }
    DevicesComponent = __decorate([
        core_1.Component({
            selector: 'devices-location-map',
            template: '<h2>plug in google map here.</h2>' +
                '<sebm-google-map>' +
                '<sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>' +
                '<sebm-google-map-marker [latitude]="17.3589256" [longitude]="78.5412585"></sebm-google-map-marker>' +
                '</sebm-google-map>'
        }), 
        __metadata('design:paramtypes', [])
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map