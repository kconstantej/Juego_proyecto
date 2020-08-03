import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo-random',
  templateUrl: './equipo-random.page.html',
  styleUrls: ['./equipo-random.page.scss'],
})
export class EquipoRandomPage implements OnInit {
  argumento=null;
  temas={
    imagen_fondo: ''
  };
  
  imagen_base:string;
  constructor(public activateRoute: ActivatedRoute, private navCtrl:NavController) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    console.log('home',this.imagen_base)
    
   }
   validar_fondo(fondo){
    
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      console.log("casaaaaaaaaaaaa",this.imagen_base);
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
  }
  onClick(){
    this.navCtrl.navigateForward('/lanzar-dado');

  }
  ngOnInit() {
    this.argumento=this.activateRoute.snapshot.paramMap.get('id');
  }

}
