import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  
  
  constructor() {
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

  ngOnInit() {
  }

}
