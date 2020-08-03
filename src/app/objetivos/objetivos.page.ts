import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.page.html',
  styleUrls: ['./objetivos.page.scss'],
})
export class ObjetivosPage implements OnInit {

  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  
  
  constructor(private storage: Storage) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    console.log('home',this.imagen_base);
    storage.set('temporizador', '60');
    storage.get('temporizador').then((val) => {
      console.log('Your age is:', val);
    });
    
    
    
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

  ngOnInit() {
  }

}
