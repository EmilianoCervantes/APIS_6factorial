import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { DeviceService } from './device.service';
import { Device } from './device.model';

@Injectable()
export class DeviceStorageService {
    constructor(private http: Http, private deviceService: DeviceService) { }

    storageDevices() {
        return this.http.put('https://tickets-sac.firebaseio.com/tickets.json', this.deviceService.getDevices());
    }

    storeDevice(devices: any[]) {
        return this.http.post('https://tickets-sac.firebaseio.com/tickets.json', devices);
    }

    getDevices() {
        let headers = new Headers();
        headers.append('ContentType', 'application/json');
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.get('https://tickets-sac.firebaseio.com/tickets.json', opts)
            .subscribe((response: Response) => {
            const devices: Device[] = response.json();
            this.deviceService.setDevices(devices);
        });
    }
}
