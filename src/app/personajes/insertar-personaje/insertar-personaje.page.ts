import { ServicesService } from './../../Service/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-personaje',
  templateUrl: './insertar-personaje.page.html',
  styleUrls: ['./insertar-personaje.page.scss'],
})
export class InsertarPersonajePage implements OnInit {
  rate=0;
  constructor(private oser: ServicesService, private oroute: Router) { }

  ngOnInit() {
  }
  insertarPersonaje(foto: HTMLInputElement, nom: HTMLInputElement, ali: HTMLInputElement, fec: HTMLInputElement,
    nac: HTMLInputElement, res: HTMLInputElement, lev:HTMLInputElement){
    this.oser.InsertarPersonaje(foto, nom, ali, fec, nac, res, lev);
    this.oroute.navigateByUrl('/personajes');
  }

}
