import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoRandomPageRoutingModule } from './equipo-random-routing.module';

import { EquipoRandomPage } from './equipo-random.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipoRandomPageRoutingModule
  ],
  declarations: [EquipoRandomPage]
})
export class EquipoRandomPageModule {}
