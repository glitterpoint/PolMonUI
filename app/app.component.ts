/**
 * Created by Surya on 11/3/2016.
 */
import { Component } from '@angular/core';

@Component({
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
    template:'<h2>{{title}}</h2>' +
    '<nav>' +
        '<a routerLink="/devices">Devices</a>' +
        '<a routerLink="/dashboard">Dashboard</a>' +
        '<router-outlet></router-outlet>' +
    '</nav>'

    })
export class AppComponent {
    title = 'Pollution Monitiror';

}