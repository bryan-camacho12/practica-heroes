import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicRatingModule } from 'ionic4-rating';
import { IonicModule } from '@ionic/angular';

import { InsertarPersonajePageRoutingModule } from './insertar-personaje-routing.module';

import { InsertarPersonajePage } from './insertar-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarPersonajePageRoutingModule,
    IonicRatingModule
  ],
  declarations: [InsertarPersonajePage]
})
export class InsertarPersonajePageModule {}
