import { Component, OnInit } from '@angular/core';
import { ConexionMavenService } from './conexion-maven.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  searchResults: any[] = [];

  constructor(private conexionMaven: ConexionMavenService) { }

  ngOnInit() {
    this.conexionMaven.todasMediciones()
    .subscribe(result => {
        if(result.status === 400){return;}
        else{ this.searchResults = result; }
      });
  }




}
