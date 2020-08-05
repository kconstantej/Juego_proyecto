import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoAzulPageRoutingModule } from './ingreso-azul-routing.module';

import { IngresoAzulPage } from './ingreso-azul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoAzulPageRoutingModule
  ],
  declarations: [IngresoAzulPage]
})
export class IngresoAzulPageModule {}
