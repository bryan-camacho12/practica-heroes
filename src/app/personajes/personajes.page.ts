import { ServicesService } from './../Service/services.service';
import { Component, OnInit } from '@angular/core';
import { Personajes } from './Entidades/Personaje';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  listaHeroes: Personajes[];
  constructor(private oser: ServicesService) { }

  ngOnInit() {
    this.listaHeroes = this.oser.getPersonajes();
  }
  ionViewWillEnter() {
    this.listaHeroes = this.oser.getPersonajes();
  }

}
