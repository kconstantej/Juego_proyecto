import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoRojoPage } from './ingreso-rojo.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoRojoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoRojoPageRoutingModule {}
