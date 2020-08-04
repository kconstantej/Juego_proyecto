import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.page.html',
  styleUrls: ['./estilos.page.scss'],
})
export class EstilosPage implements OnInit {

  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  
  
  constructor() {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    //console.log('+++++++',this.imagen_base)

   }
   validar_fondo(fondo){
    
    if(fondo===''){
      //console.log('casaaaaaaaaaaaa',fondo,'---------');
      localStorage.setItem('fondo','backgroundClaro');
      this.imagen_base= localStorage.getItem('fondo');
    }else{
      this.imagen_base= localStorage.getItem('fondo');
    }
  }


  ngOnInit() {
  }

}
