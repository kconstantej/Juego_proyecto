import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaGanadorPage } from './pantalla-ganador.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaGanadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaGanadorPageRoutingModule {}
