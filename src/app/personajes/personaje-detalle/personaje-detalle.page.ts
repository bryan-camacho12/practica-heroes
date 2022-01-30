import { ServicesService } from './../../Service/services.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Personajes } from '../Entidades/Personaje';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.page.html',
  styleUrls: ['./personaje-detalle.page.scss'],
})
export class PersonajeDetallePage implements OnInit {
personaje: Personajes;
@ViewChild('poder',{read: ElementRef}) input: ElementRef<HTMLInputElement>;
  constructor( private oser: ServicesService,
    private atcRouter: ActivatedRoute,
    private oroute: Router,
    private ocount: AlertController) { }

  ngOnInit() {
    this.atcRouter.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('personajeId');
      this.personaje = this.oser.getPersonaje(id);
      console.log(this.personaje);
    });
  }
  eliminarHeroe() {
    this.oser.DeletePersonaje(this.personaje.idHeroe);
    this.oroute.navigate(['/personajes']);
  }

  async notificacionEliminar() {
    const toast = await this.ocount.create({
      header: 'Eliminar Heroe',
      message: 'Desea eliminar el heroe?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarHeroe();
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    toast.present();
  }

  insertarPoder(com: string) {
    this.oser.InsertarPoderes(com, this.personaje.idHeroe);
    this.input.nativeElement.value='';
  }

}
