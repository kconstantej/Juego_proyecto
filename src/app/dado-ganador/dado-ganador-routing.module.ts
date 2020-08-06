import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadoGanadorPage } from './dado-ganador.page';

const routes: Routes = [
  {
    path: '',
    component: DadoGanadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadoGanadorPageRoutingModule {}
