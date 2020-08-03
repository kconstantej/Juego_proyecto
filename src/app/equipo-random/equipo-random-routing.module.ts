import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoRandomPage } from './equipo-random.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoRandomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoRandomPageRoutingModule {}
