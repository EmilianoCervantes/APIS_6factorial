import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http } from '@angular/http'

import { Device } from '../device.model';
import { DeviceService } from '../device.service';
import { DeviceStorageService } from '../device-storage.service';

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})

export class DeviceListComponent implements OnInit, OnDestroy {
    devices: Device[];
    subcription: Subscription;

    constructor(private deviceService: DeviceService,
                private deviceStorageService: DeviceStorageService,
                private http:Http) { }

    ngOnInit() {
        this.http.get("http://localhost:8080/api/sensores/dispositivos").subscribe(res => {console.log(res); this.devices = res.json()});
        /*this.subcription = this.deviceService.deviceChanged.subscribe(
            (devices: Device[]) => {
                this.devices = devices;
            }
        );
        this.deviceStorageService.getDevices();*/
    }

    ngOnDestroy() {
        this.subcription.unsubscribe();
    }

}
