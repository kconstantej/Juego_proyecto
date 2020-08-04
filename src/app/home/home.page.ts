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
