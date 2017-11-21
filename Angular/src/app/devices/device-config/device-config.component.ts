import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DeviceService } from '../device.service';
import { DeviceStorageService } from '../device-storage.service';

@Component({
    selector: 'app-device-config',
    templateUrl: './device-config.component.html',
    styleUrls: ['./device-config.component.scss']
})
export class DeviceConfigComponent implements OnInit {
    id: number;
    editMode = false;

    constructor(private route: ActivatedRoute, private deviceService: DeviceService,
                 private router: Router, private deviceStorageService: DeviceStorageService) { }

    ngOnInit() {
        this.route.params.subscribe( (params: Params) => {
            this.id = +params['id'];
        });
    }

    onDetail() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onReturn(){
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}
