import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnagramaPageRoutingModule } from './anagrama-routing.module';

import { AnagramaPage } from './anagrama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnagramaPageRoutingModule
  ],
  declarations: [AnagramaPage]
})
export class AnagramaPageModule {}
