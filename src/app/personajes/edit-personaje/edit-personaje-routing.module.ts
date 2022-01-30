import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPersonajePage } from './edit-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: EditPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPersonajePageRoutingModule {}
