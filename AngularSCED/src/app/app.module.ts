import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeadersInterceptor } from './app.interceptor';
import { DevicesComponent } from './devices/devices.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceConfigComponent } from './devices/device-config/device-config.component';
import { InitComponent } from './devices/init/init.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';

import { DeviceService } from './devices/device.service';
import { DeviceStorageService } from './devices/device-storage.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        DevicesComponent,
        DeviceListComponent,
        DeviceConfigComponent,
        InitComponent,
        DeviceDetailComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [DeviceService, DeviceStorageService, {
        provide: HTTP_INTERCEPTORS,
        useClass: HeadersInterceptor,
        multi: true
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
