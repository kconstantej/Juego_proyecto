import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //desde aqui
  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  
  
  constructor(private storage: Storage) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
   
    storage.set('temporizador', 60);
    
  }
  validar_fondo(fondo){
    
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
  }
  //hasta aqui

}