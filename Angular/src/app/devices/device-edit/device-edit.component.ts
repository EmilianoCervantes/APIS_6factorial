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
      deviceName = device.name;
      deviceType = device.type;
    }

    this.deviceForm = new FormGroup({
      'name': new FormControl(deviceName),
      'type': new FormControl(deviceType)
    });
  }

  onSubmit(){
    console.log(this.deviceForm);
  }
}