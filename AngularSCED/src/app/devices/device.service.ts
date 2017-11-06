import { Subject } from 'rxjs/Subject';

import { Device } from './device.model';

export class DeviceService {
    index: number;
    deviceChanged = new Subject<Device[]>();

    private devices: Device[];

    getDevices() {
        return this.devices.slice();
    }

    getDevice(id: number) {
        for (this.index = 0; this.index < this.devices.length; this.index++) {
            if (id == this.devices[this.index].id) {
                return this.devices[this.index];
            }
        }
    }

    setDevices(devices: Device[]) {
        this.devices = devices;
        this.deviceChanged.next(this.devices.slice());
    }

    addDevice(device: Device) {
        this.devices.push(device);
        this.deviceChanged.next(this.devices.slice());
    }

    updateDevice(id: number, newDevice: Device) {
        for (this.index = 0; this.index < this.devices.length; this.index++) {
            if (id === this.devices[this.index].id) {
                newDevice.id = id;
                this.devices[this.index] = newDevice;
                this.deviceChanged.next(this.devices.slice());
            }
        }
    }

    deleteDevice(id: number) {
        for (this.index = 0; this.index < this.devices.length; this.index++) {
            if (id === this.devices[this.index].id) {
                this.devices.splice(this.index, 1);
                this.deviceChanged.next(this.devices.slice());
            }
        }
    }
}