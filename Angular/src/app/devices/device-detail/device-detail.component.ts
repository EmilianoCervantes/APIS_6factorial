import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Device } from '../device.model';
import { DeviceService } from '../device.service';

@Component({
    selector: 'app-device-detail',
    templateUrl: './device-detail.component.html',
    styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  device: Device;
  id: number;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.device = this.deviceService.getDevice(this.id);
      }
    );
  }

  onEditDevice() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  /*onAddComment() {
    this.router.navigate(['comment'], { relativeTo: this.route });
  }
  */

  onDeleteDevice() {
    this.deviceService.deleteDevice(this.id);
    this.router.navigate(['/dispositivos']);
  }
}