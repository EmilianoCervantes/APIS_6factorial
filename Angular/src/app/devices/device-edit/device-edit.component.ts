import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  id: number;
  editMode = false;
  deviceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private deviceService: DeviceService,
              private router: Router) { }

  ngOnInit() {
    //si parámetro de id es nulo, editMode será falso
    this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    }
    );
  }

  private initForm(){
    let deviceName = '';
    let deviceType = '';

    if(this.editMode){
      const device = this.deviceService.getDevice(this.id);
      deviceName = device.nombreDispositivo;
      deviceType = device.tipoDispositivo;
    }

    this.deviceForm = new FormGroup({
      'name': new FormControl(deviceName, Validators.required),
      'type': new FormControl(deviceType, Validators.required)
    });
  }

  onSubmit(){
    //console.log(this.deviceForm)
    /*const newDevice = new Device(this.deviceForm.value['id'],
      this.deviceForm.value['name'],
      this.deviceForm.value['type'],
      this.deviceForm.value['measure'],
      this.deviceForm.value['date'],
      this.deviceForm.value['time']);*/
    if(this.editMode){
      this.deviceService.updateDevice(this.id, this.deviceForm.value);
    } else {
      this.deviceService.addDevice(this.deviceForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
