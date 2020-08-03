import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanzarDadoPageRoutingModule } from './lanzar-dado-routing.module';

import { LanzarDadoPage } from './lanzar-dado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanzarDadoPageRoutingModule
  ],
  declarations: [LanzarDadoPage]
})
export class LanzarDadoPageModule {}
