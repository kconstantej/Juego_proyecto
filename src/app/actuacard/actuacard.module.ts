import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuacardPageRoutingModule } from './actuacard-routing.module';

import { ActuacardPage } from './actuacard.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuacardPageRoutingModule,ComponentsModule
  ],
  declarations: [ActuacardPage]
})
export class ActuacardPageModule {}
