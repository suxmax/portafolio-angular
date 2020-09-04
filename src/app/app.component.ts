import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public productosService : ProductosService
  public infoPaginaService: InfoPaginaService
  
  constructor(infoPaginaService: InfoPaginaService, productosService : ProductosService)
  {
    this.infoPaginaService = infoPaginaService;
    this.productosService = productosService;
  }
}
