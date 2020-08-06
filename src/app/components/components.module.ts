import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj/reloj.component';
import { IonicModule } from '@ionic/angular';
import { CamaraComponent } from './camara/camara.component';



@NgModule({
  declarations: [RelojComponent,CamaraComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    RelojComponent,
    CamaraComponent
  ]
})
export class ComponentsModule { }
