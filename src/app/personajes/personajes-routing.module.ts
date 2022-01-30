import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajesPage } from './personajes.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesPage
  },
  {
    path: 'personaje-detalle',
    loadChildren: () => import('./personaje-detalle/personaje-detalle.module').then( m => m.PersonajeDetallePageModule)
  },
  {
    path: 'insertar-personaje',
    loadChildren: () => import('./insertar-personaje/insertar-personaje.module').then( m => m.InsertarPersonajePageModule)
  },
  {
    path: 'edit-personaje',
    loadChildren: () => import('./edit-personaje/edit-personaje.module').then( m => m.EditPersonajePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesPageRoutingModule {}
