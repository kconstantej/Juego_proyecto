import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoVerdePage } from './ingreso-verde.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoVerdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoVerdePageRoutingModule {}
