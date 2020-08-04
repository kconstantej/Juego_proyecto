import { Component } from '@angular/core';
import { isUndefined } from 'util';
import { DataLocalService } from '../services/data-local.service';
import { Storage } from '@ionic/storage';

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
  
  
  constructor(private storage: Storage, private datalocal: DataLocalService ) {
    this.datalocal.firstTime();
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
   
    
    
  }
  validar_fondo(fondo){
    
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      this.storage.set('temporizador', 1);
      console.log("casaaaaaaaaaaaa",this.imagen_base);
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
  }

}
