import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morada',
  templateUrl: './morada.page.html',
  styleUrls: ['./morada.page.scss'],
})
export class MoradaPage implements OnInit {

  temas={
    imagen_fondo: ''
  };
  
  imagen_base:string;
  constructor(private router: Router) {
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
  btnAmarilla(){
    this.router.navigate(['/anagrama']);
  }
  btnAzul(){
    this.router.navigate(['/dibujocard']);
  }
  btnRojo(){
    this.router.navigate(['/opcioncard']);
  }
  btnVerde(){
    this.router.navigate(['/actuacard']);
  }
  ngOnInit() {
  }

}
