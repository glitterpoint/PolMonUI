/**
 * Created by Surya on 11/3/2016.
 */
import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule   } from '@angular/forms';
import { AppComponent  } from './app.component';
import { DevicesComponent} from './devices.component';
import { TelemetryDashboardComponent} from './telemetry-Dashboard.component'
import { RouterModule} from '@angular/router';
import { AgmCoreModule} from 'angular2-google-maps/core';  //https://angular-maps.com/docs/getting-started.html



@NgModule({
    imports:        [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path:'devices',
                component:DevicesComponent
            },
            {
                path:'dashboard',
                component:TelemetryDashboardComponent
            },

        ]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAf-Zu4il008oTjbMmbJm_uUnWq-1DJMuY'
        })
    ],
    declarations:   [AppComponent, DevicesComponent, TelemetryDashboardComponent],
    bootstrap:      [AppComponent]

})
//ss

export class AppModule { }

