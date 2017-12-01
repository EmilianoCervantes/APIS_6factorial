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
            if (id === this.devices[this.index].idDispositivo) {
                return this.devices[this.index];
            }
        }
    }

    setDevices(devices: Device[]) {
        this.devices = devices;
        this.deviceChanged.next(this.devices.slice());
    }

    addDevice(device: Device) {
        device.idDispositivo = this.devices.length;
        this.devices.push(device);
        this.deviceChanged.next(this.devices.slice());
    }

    updateDevice(id: number, newDevice: Device) {
        for (this.index = 0; this.index < this.devices.length; this.index++) {
            if (id === this.devices[this.index].idDispositivo) {
                newDevice.idDispositivo = id;
                this.devices[this.index] = newDevice;
                this.deviceChanged.next(this.devices.slice());
            }
        }
    }

    /*addComment(id: number, comment: Comment) {
        comment.created = '23/10/2017';
        comment.name = 'Lucero Áviles';
        for (this.index = 0; this.index < this.tickets.length; this.index++) {
            if (id === this.tickets[this.index].id) {
                this.tickets[this.index].comments.push(comment);
                this.ticketChanged.next(this.tickets.slice());
            }
        }
    }*/

    deleteDevice(id: number) {
        for (this.index = 0; this.index < this.devices.length; this.index++) {
            if (id === this.devices[this.index].idDispositivo) {
                this.devices.splice(this.index, 1);
                this.deviceChanged.next(this.devices.slice());
            }
        }
    }
}