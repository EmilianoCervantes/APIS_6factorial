import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title;
    results: string[];


    constructor(private httpClient: HttpClient) {

    }

    ngOnInit(): void {
        
        

        /*let header = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
        
        this.httpClient.get('http://localhost:8080/api/padres/hermanos', {
            headers: header
        }).subscribe(data => {
            console.log(data);
        });
        console.log('headersssss: ', header.get('Access-Control-Allow-Origin'));

        const req = this.httpClient.post('http://localhost:8080/api/padres/crea', {
            padre: 'Martin',
            hijo: 'Alison'
        }, { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })}).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('Error');
            }
        );*/
    }
}
