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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Pollution Monitiror';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template: ' <h1>{{title}}</h1> <h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label> <input [(ngModel)]="hero.name" placeholder="name"></div>'
            // template:' <h1>{{title}}</h1> <h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label> <input [(ngModel)]="hero.name" placeholder="name"></div>' +
            // '<h2>My Heroes</h2>' +
            // '<ul class="heroes"> ' +
            //     '<li *ngFor="let hero of heroes" (click)="onSelect(hero)"  [class.selected]="hero === selectedHero"> ' +
            //         '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
            //     '</li>' +
            // '</ul>' + '<my-hero-detail [hero]="selectedHero"></my-hero-detail>'
            // template:'<h2>{{title}}</h2>' +
            // '<devices-location-map></devices-location-map>' +
            // '<telemetry-dashboard></telemetry-dashboard>'
            template: '<h2>{{title}}</h2>' +
                '<nav>' +
                '<a routerLink="/devices">Devices</a>' +
                '<a routerLink="/dashboard">Dashboard</a>' +
                '<router-outlet></router-outlet>' +
                '</nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map