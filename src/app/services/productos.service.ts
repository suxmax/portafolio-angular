import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoInterface} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] =[];
  productosFiltrado: ProductoInterface[] = [];

  private http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
    this.cargarProductos();
   }

   cargarProductos()
   {
    return new Promise((resolve, reject) => {

      this.http.get('https://angular-html-52509.firebaseio.com/productos_idx.json') 
        .subscribe( (response: ProductoInterface[]) => {
          this.productos = response;
          this.cargando = false;

          resolve();
        });
    });

      
   }

   getProducto( id: string) {
    return this.http.get(`https://angular-html-52509.firebaseio.com/productos/${id}.json`)
   }

   buscarProducto(termino: string)
   {
    if(this.productos.length === 0)
    {
      //carga productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }
    else //aplicar el filtro
    {
      this.filtrarProductos(termino);
    }

    }

   private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });
  }
}
