import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeadersInterceptor } from './app.interceptor';
import { DevicesComponent } from './devices/devices.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { InitComponent } from './devices/init/init.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';

import { DeviceService } from './devices/device.service';
import { DeviceStorageService } from './devices/device-storage.service';
import { ConexionMavenService } from './devices/conexion-maven.service';

import { AppRoutingModule } from './app-routing.module';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        DevicesComponent,
        DeviceListComponent,
        InitComponent,
        DeviceDetailComponent,
        DeviceEditComponent,
        SignupComponent,
        SigninComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [DeviceService, DeviceStorageService,ConexionMavenService, {
        provide: HTTP_INTERCEPTORS,
        useClass: HeadersInterceptor,
        multi: true
    },
    AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
