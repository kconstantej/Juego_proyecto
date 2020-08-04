import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DibujocardPageRoutingModule } from './dibujocard-routing.module';

import { DibujocardPage } from './dibujocard.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DibujocardPageRoutingModule,ComponentsModule
  ],
  declarations: [DibujocardPage]
})
export class DibujocardPageModule {}
