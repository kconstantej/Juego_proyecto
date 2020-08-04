import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnagramaPageRoutingModule } from './anagrama-routing.module';

import { AnagramaPage } from './anagrama.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnagramaPageRoutingModule,ComponentsModule
  ],
  declarations: [AnagramaPage]
})
export class AnagramaPageModule {}
