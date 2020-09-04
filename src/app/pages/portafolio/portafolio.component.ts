import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public productosService: ProductosService;
  constructor(productosService: ProductosService) {
    this.productosService = productosService;
   }

  ngOnInit(): void {
  }

}
