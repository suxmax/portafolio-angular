import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public _infoEquipo: InfoPaginaService;

  constructor(_infoEquipo: InfoPaginaService) {
    this._infoEquipo = _infoEquipo;
   }

  ngOnInit(): void {
  }

}
