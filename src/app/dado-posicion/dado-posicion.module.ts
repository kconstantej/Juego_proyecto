import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadoPosicionPageRoutingModule } from './dado-posicion-routing.module';

import { DadoPosicionPage } from './dado-posicion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadoPosicionPageRoutingModule
  ],
  declarations: [DadoPosicionPage]
})
export class DadoPosicionPageModule {}
