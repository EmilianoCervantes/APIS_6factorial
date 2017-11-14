import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class ConexionMavenService {

  /* URLS de GET */
  private habitacionesUrl: string = 'http://localhost:8080/api/sensores/habitaciones';
  private dispositivosUrl: string = 'http://localhost:8080/api/sensores/dispositivos';
  private medicionesUrl: string = 'http://localhost:8080/api/sensores/mediciones';

  /* URLS de POST */
  private nuevaHabitacionUrl: string = 'http://localhost:8080/api/sensores/crea-habitacion';
  private nuevoDispositivosUrl: string = 'http://localhost:8080/api/sensores/crea-dispositivo';
  private nuevaMedicionesUrl: string = 'http://localhost:8080/api/sensores/crea-medicion';

  constructor(private http: Http) {  }
  /*FUnciones de GET*/
  todasHabitaciones(){
    return this.http.get(this.habitacionesUrl).map(res => res.json());
  }
  todosDispositivos(){
    return this.http.get(this.dispositivosUrl).map(res => res.json());
  }
  todasMediciones(){
    return this.http.get(this.medicionesUrl).map(res => res.json());
  }
  /* Funciones de POST */
  insertarHabitacion(){
  }


}
