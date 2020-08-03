import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActuacardPage } from './actuacard.page';

const routes: Routes = [
  {
    path: '',
    component: ActuacardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActuacardPageRoutingModule {}
