import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha: number = new Date().getFullYear();
  public _infoServicio: InfoPaginaService
  constructor(_infoServicio: InfoPaginaService) { 
    this._infoServicio = _infoServicio;
  }

  ngOnInit(): void {
  }

}
