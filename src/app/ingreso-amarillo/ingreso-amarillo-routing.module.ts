import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoAmarilloPage } from './ingreso-amarillo.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoAmarilloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoAmarilloPageRoutingModule {}
