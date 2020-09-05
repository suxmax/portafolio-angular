import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public _infoServicio: InfoPaginaService
  public router: Router; //ho bisogno di questo per poter navigare nel componente search dopo aver cercato qualcosa

  constructor(_infoServicio: InfoPaginaService, router: Router) {
    this._infoServicio = _infoServicio;
    this.router = router;


   }

  ngOnInit(): void {
  }

  buscarProducto(termino:string)
  {
    if(termino.length < 1)
    {
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
