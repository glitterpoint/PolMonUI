/**
 * Created by Surya on 11/3/2016.
 */
import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule   } from '@angular/forms';
import { AppComponent  } from './app.component';


@NgModule({
    imports:        [BrowserModule, FormsModule],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent]
})
export class AppModule { }
