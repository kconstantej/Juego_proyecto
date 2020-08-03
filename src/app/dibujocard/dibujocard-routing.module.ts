import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DibujocardPage } from './dibujocard.page';

const routes: Routes = [
  {
    path: '',
    component: DibujocardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DibujocardPageRoutingModule {}
