import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanzar-dado',
  templateUrl: './lanzar-dado.page.html',
  styleUrls: ['./lanzar-dado.page.scss'],
})
export class LanzarDadoPage implements OnInit {
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
  public  random() {
    //console.log(this.informacion);
    let rd = Math.floor(Math.random()*((5-1)+1))+1;
    console.log(rd);
    this.router.navigate(['/dado',rd])
    
  }

  ngOnInit() {
  }

}

