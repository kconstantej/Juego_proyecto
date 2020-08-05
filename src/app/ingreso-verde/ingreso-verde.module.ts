import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoVerdePageRoutingModule } from './ingreso-verde-routing.module';

import { IngresoVerdePage } from './ingreso-verde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoVerdePageRoutingModule
  ],
  declarations: [IngresoVerdePage]
})
export class IngresoVerdePageModule {}
