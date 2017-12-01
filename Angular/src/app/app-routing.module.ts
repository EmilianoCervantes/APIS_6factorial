import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { InitComponent } from './devices/init/init.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full'},
    { path: 'dispositivos', component: DevicesComponent, canActivate: [AuthGuard],children: [
        { path: '', component: InitComponent },
        { path: ':id', component: DeviceDetailComponent, canActivate: [AuthGuard] },
        { path: ':id/edit', component: DeviceEditComponent, canActivate: [AuthGuard] }
    ]},
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
