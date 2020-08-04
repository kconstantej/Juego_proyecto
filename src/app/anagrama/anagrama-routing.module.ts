import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnagramaPage } from './anagrama.page';

const routes: Routes = [
  {
    path: '',
    component: AnagramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnagramaPageRoutingModule {}
