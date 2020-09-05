import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private route: ActivatedRoute;
  public productoService : ProductosService; 

  constructor(route: ActivatedRoute, productoService : ProductosService ) {
    this.route = route;
    this.productoService = productoService;
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      console.log(params['termino']);

      this.productoService.buscarProducto(params['termino']);
    });
  };

}
