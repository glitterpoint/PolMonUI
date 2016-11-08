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
 * Created by Surya on 11/3/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var core_2 = require('angular2-google-maps/core'); //https://angular-maps.com/docs/getting-started.html
var app_component_1 = require('./app.component');
var devices_component_1 = require('./devices.component');
var telemetry_dashboard_component_1 = require('./telemetry-dashboard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'devices',
                        component: devices_component_1.DevicesComponent
                    },
                    {
                        path: 'dashboard',
                        component: telemetry_dashboard_component_1.TelemetryDashboardComponent
                    },
                ]),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAf-Zu4il008oTjbMmbJm_uUnWq-1DJMuY'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                devices_component_1.DevicesComponent,
                telemetry_dashboard_component_1.TelemetryDashboardComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map