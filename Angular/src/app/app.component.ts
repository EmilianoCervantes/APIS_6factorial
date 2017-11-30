import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth/auth.service';

import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title;
    results: string[];

    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyDVyybs760SuiHnvz2DqdHzQdIsLJimlXA",
            authDomain: "dipositivos-apis.firebaseapp.com",
        })
    }

    onLogout(){
        this.authService.logout();
    }
}
