/**
 * Created by Surya on 11/3/2016.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template:'<h2>{{title}}</h2>' +
    '<nav style="height:1500px">' +
        '<a routerLink="/devices">Devices</a>' +
        '<a routerLink="/dashboard">Dashboard</a>' +
        '<router-outlet></router-outlet>' +
    '</nav>',

    })
export class AppComponent {
    title = 'Pollution Monitiror';

}