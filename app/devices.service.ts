/**
 * Created by surya on 11/6/16.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http, HTTP_PROVIDERS } from '@angular/http';
import {Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Device} from './device';


@Injectable()
export class DeviceService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private deviceUrl = 'http://localhost:3000/api/devices';  // URL to web api
    constructor(private http: Http) { }

    getDevices(): Observable<Device[]> {
       return this.http.get(this.deviceUrl)
        .map(res => res.json());
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
