import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcioncardPageRoutingModule } from './opcioncard-routing.module';

import { OpcioncardPage } from './opcioncard.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcioncardPageRoutingModule,ComponentsModule
  ],
  declarations: [OpcioncardPage]
})
export class OpcioncardPageModule {}
