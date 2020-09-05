import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public productoItem: ProductoDescripcion = {};
  productoId: string
  public cargando = true
  public productoService: ProductosService;
  private route: ActivatedRoute; //CON QUESTO MODULO POSOS LEGGERE LA URL
  
  constructor(route: ActivatedRoute, productoService: ProductosService) { //COSI POSSO LEGGERE LA URL E ORENDERE IL NOME DELL'OGGETTO CHE CLICCHIAMO
    this.route = route;
    this.productoService = productoService;
   }

  ngOnInit(): void {
    this.route.params
    .subscribe(parametros => { //SUBSCRIBE STA ATTENTO A TUTTI GLI CAMBI CHE SUCCEDONO CON I PARAMETRI DELLA URL 
      //console.log(parametros['id']); //cosi catturiamo l'id del porodotto quando clicchiamo nel portafoglio
     //catturando l'id possiamo fare un reindizzamento al servizio per ottenere il prodotto dinamicamente
      this.productoService.getProducto(parametros['id']) //in questo modo sto facendo riferimento al servizio
        .subscribe((producto: ProductoDescripcion) => { //per poterlo eseguire devo usare il subscribe e vado a ricevere il producto
          
          setTimeout(() => {
            this.cargando = false;
          },2500)

          this.productoItem = producto;
          this.productoId = parametros['id'];
        });
      });
  }

} 
