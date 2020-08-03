import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanzarDadoPage } from './lanzar-dado.page';

const routes: Routes = [
  {
    path: '',
    component: LanzarDadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanzarDadoPageRoutingModule {}
