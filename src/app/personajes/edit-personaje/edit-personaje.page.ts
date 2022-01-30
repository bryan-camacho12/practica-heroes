import { ServicesService } from './../../Service/services.service';
import { Component, OnInit } from '@angular/core';
import { Personajes } from '../Entidades/Personaje';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-edit-personaje',
  templateUrl: './edit-personaje.page.html',
  styleUrls: ['./edit-personaje.page.scss'],
})
export class EditPersonajePage implements OnInit {
  lista: Personajes;
  foto: string;
  nombre: string;
  alias:string;
  fechaNac:string;
  nacionalidad:string;
  residencia:string;
  level:number;
  constructor(
    private oser: ServicesService,
    private atcRouter: ActivatedRoute,
    private ocount: AlertController,
    private oroute: Router
  ) { }

  ngOnInit() {
    this.atcRouter.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.lista = this.oser.getPersonaje(id);
      console.log(this.lista);
      this.foto = this.lista.foto;
      this.nombre = this.lista.nombre;
      this.alias = this.lista.alias;
      this.fechaNac = this.lista.fechaNac;
      this.nacionalidad = this.lista.nacionalidad;
      this.residencia = this.lista.residencia;
      this.level = this.lista.level;
    });
  }
  editarHeroe() {
    this.oser.EditarPersonaje(this.foto, this.nombre, this.alias, this.fechaNac, this.nacionalidad, this.residencia, this.level, this.lista.idHeroe);
  }
  async notificacionEditar() {
    const toast = await this.ocount.create({
      header: 'Editar Heroe',
      message: 'Esta seguro de Editar el Heroe?',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.editarHeroe();
            this.oroute.navigateByUrl('/personajes');
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    toast.present();
  }

}
