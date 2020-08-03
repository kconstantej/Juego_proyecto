<<<<<<< HEAD
import { Component } from '@angular/core';
import { isUndefined } from 'util';
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
=======
import { Component } from '@angular/core';
import { isUndefined } from 'util';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  
  
  constructor( private datalocal: DataLocalService ) {
    this.datalocal.firstTime();
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

}
>>>>>>> 4a3ac8f7156fc096238b2d6c166e7e8927e25050
