import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoInterface} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[];

  private http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
    this.cargarProductos();
   }

   cargarProductos()
   {
      this.http.get('https://angular-html-52509.firebaseio.com/productos_idx.json') 
        .subscribe( (response: ProductoInterface[]) => {
          console.log(response);
          this.productos = response;
          setTimeout(() => {
            this.cargando = false;
          },500)
        });

   }
}
