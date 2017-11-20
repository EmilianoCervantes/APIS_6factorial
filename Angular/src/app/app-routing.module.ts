import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { InitComponent } from './devices/init/init.component';
import { DeviceConfigComponent } from './devices/device-config/device-config.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/dispositivos', pathMatch: 'full'},
    { path: 'dispositivos', component: DevicesComponent, children: [
        { path: '', component: InitComponent },
        { path: ':id', component: DeviceDetailComponent },
        { path: ':id/config', component: DeviceConfigComponent },
        { path: ':id/config/edit', component: DeviceEditComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
