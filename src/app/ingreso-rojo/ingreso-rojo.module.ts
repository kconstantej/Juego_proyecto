import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoRojoPageRoutingModule } from './ingreso-rojo-routing.module';

import { IngresoRojoPage } from './ingreso-rojo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoRojoPageRoutingModule
  ],
  declarations: [IngresoRojoPage]
})
export class IngresoRojoPageModule {}
