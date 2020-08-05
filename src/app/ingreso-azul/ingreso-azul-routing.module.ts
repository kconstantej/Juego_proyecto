import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoAzulPage } from './ingreso-azul.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoAzulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoAzulPageRoutingModule {}
