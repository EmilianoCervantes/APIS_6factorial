import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { DeviceService } from '../device.service';
import { DeviceStorageService } from '../device-storage.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {
  id: number;
  editMode = false;
  deviceForm: FormGroup;

  constructor(private route: ActivatedRoute, private deviceService: DeviceService,
              private router: Router, private deviceStorageService: DeviceStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    if(this.editMode){
      this.deviceService.updateDevice(this.id, this.deviceForm.value);
      this.onViewDevice();
    } else {
      this.deviceService.addDevice(this.deviceForm.value);
      this.deviceForm.reset();
    }
    this.onSave();
  }

  onSave() {
    this.deviceStorageService.storageDevices()
        .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
  }

  onViewDevice() {
      this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteDevice() {
      this.deviceService.deleteDevice(this.id);
      this.router.navigate(['/tickets']);
  }

  private initForm(){
    let deviceName = '';
    let deviceType = '';

    if(this.editMode){
      const device = this.deviceService.getDevice(this.id);
      deviceName = device.nombre;
      deviceType = device.tipo;
    }

    this.deviceForm = new FormGroup({
      'name': new FormControl(deviceName, Validators.required),
      'type': new FormControl(deviceType, Validators.required)
    });
  }
}
