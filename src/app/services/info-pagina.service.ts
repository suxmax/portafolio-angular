import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  Datacargada = false;
  equipo: any[];

  private http: HttpClient //con questo servizio posso realizzare petizioni a qualsiasi server

  constructor(http: HttpClient) { 
    this.http = http;

    //console.log('Servicio de infoPagina listo');

    //leer el archivo JSON
    this.cargarInfo();

    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: InfoPagina) => {
        this.Datacargada = true;
        this.info = response;
      });
  };
  private cargarEquipo() {
    this.http.get('https://angular-html-52509.firebaseio.com/equipo.json')
      .subscribe((response: any) => {
        this.equipo = response;
      })
  }
}

