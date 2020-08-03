import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj/reloj.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RelojComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    RelojComponent
  ]
})
export class ComponentsModule { }
