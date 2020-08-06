import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadoPosicionPage } from './dado-posicion.page';

const routes: Routes = [
  {
    path: '',
    component: DadoPosicionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadoPosicionPageRoutingModule {}
