import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../../device.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent implements OnInit {
	@Input() device: Device;
	@Input() index: number;

	ngOnInit() {
	}
}