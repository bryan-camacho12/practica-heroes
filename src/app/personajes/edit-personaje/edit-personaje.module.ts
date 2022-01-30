import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPersonajePageRoutingModule } from './edit-personaje-routing.module';

import { EditPersonajePage } from './edit-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPersonajePageRoutingModule
  ],
  declarations: [EditPersonajePage]
})
export class EditPersonajePageModule {}
