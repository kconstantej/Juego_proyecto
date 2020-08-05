import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoAmarilloPageRoutingModule } from './ingreso-amarillo-routing.module';

import { IngresoAmarilloPage } from './ingreso-amarillo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoAmarilloPageRoutingModule
  ],
  declarations: [IngresoAmarilloPage]
})
export class IngresoAmarilloPageModule {}
