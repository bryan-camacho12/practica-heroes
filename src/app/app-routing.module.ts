import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    children:[{
      path: '',
      loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
    },
    {
      path: ':personajeId',
      loadChildren: () => import('./personajes/personaje-detalle/personaje-detalle.module').then( m => m.PersonajeDetallePageModule)
    },
  ]
  },
  {
    path: 'insertar-personaje',
    loadChildren: () =>
      import('./personajes/insertar-personaje/insertar-personaje.module').then(
        (m) => m.InsertarPersonajePageModule
      ),
  },
  {
    path: 'edit-personaje',
    loadChildren: () =>
      import('./personajes/edit-personaje/edit-personaje.module').then(
        (m) => m.EditPersonajePageModule
      ),
  },
  {
    path: 'edit-personaje/:id',
    loadChildren: () =>
      import('./personajes/edit-personaje/edit-personaje.module').then(
        (m) => m.EditPersonajePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
