import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaGanadorPageRoutingModule } from './pantalla-ganador-routing.module';

import { PantallaGanadorPage } from './pantalla-ganador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaGanadorPageRoutingModule
  ],
  declarations: [PantallaGanadorPage]
})
export class PantallaGanadorPageModule {}
