import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { DeviceService } from './device.service';
import { Device } from './device.model';

@Injectable()
export class DeviceStorageService {
    constructor(private http: Http, private deviceService: DeviceService) { }

    /*
    storeDevice(devices: any[]) {
        return this.http.post('', devices);
    }
    getDevices() {
        let headers = new Headers();
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.get('http://localhost:4200/assets/devices.json')
            .subscribe((response: Response) => {
            const devices: Device[] = response.json();
            this.deviceService.setDevices(devices);
        });
    }*/
    getDevices() {
        let headers = new Headers();
        let opts = new RequestOptions();
        opts.headers = headers;
        this.http.get('http://localhost:8080/api/sensores/dispositivos')
            .map(
                (response: Response) => {
                    const devices: Device[] = response.json();
                    return devices;
                }
            )
            .subscribe(
                (devices: Device[]) => {
                this.deviceService.setDevices(devices);
            });
    }
}
