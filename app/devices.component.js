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
var devices_service_1 = require('./devices.service');
var DevicesComponent = (function () {
    function DevicesComponent(deviceService) {
        this.deviceService = deviceService;
        this.title = 'Sensors locations';
        this.zoom = 10;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService.getDevices()
            .subscribe(function (devices) {
            _this.devices = devices;
            if (_this.devices.length > 0) {
                _this.rootLat = _this.devices[0].Location.points[0].x;
                _this.rootLng = _this.devices[0].Location.points[0].y;
            }
        });
    };
    DevicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'devices-location-map',
            templateUrl: 'device.html',
            providers: [devices_service_1.DeviceService],
        }), 
        __metadata('design:paramtypes', [devices_service_1.DeviceService])
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map