import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaGanadorPageRoutingModule } from './pantalla-ganador-routing.module';

import { PantallaGanadorPage } from './pantalla-ganador.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaGanadorPageRoutingModule,ComponentsModule
  ],
  declarations: [PantallaGanadorPage]
})
export class PantallaGanadorPageModule {}
