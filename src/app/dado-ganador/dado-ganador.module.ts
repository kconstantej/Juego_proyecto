import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadoGanadorPageRoutingModule } from './dado-ganador-routing.module';

import { DadoGanadorPage } from './dado-ganador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadoGanadorPageRoutingModule
  ],
  declarations: [DadoGanadorPage]
})
export class DadoGanadorPageModule {}
