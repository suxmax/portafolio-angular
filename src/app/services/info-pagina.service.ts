import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  Datacargada = false;

  private http: HttpClient //co questo servizio posos realizzare petizioni a qualsiasi server

  constructor(http: HttpClient) { 
    this.http = http;

    //console.log('Servicio de infoPagina listo');

    //leet el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: InfoPagina) => {
        this.Datacargada = true;
        this.info = response;
        console.log(response);
      })

  }
}
