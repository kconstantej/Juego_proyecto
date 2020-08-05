import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.page.html',
  styleUrls: ['./estilos.page.scss'],
})
export class EstilosPage implements OnInit {

  temas={
    imagen_fondo: '',
    fuente_tema: ''
   
  };
  
  imagen_base:string;
  fuente_base: string;
  
  
  constructor(public router:Router) {
    this.validar_fondo(localStorage.getItem('fondo'),localStorage.getItem('fuente'))
    this.imagen_base= localStorage.getItem('fondo');
    this.fuente_base=localStorage.getItem('fuente');
    //console.log('+++++++',this.imagen_base)

   }
   validar_fondo(fondo,fuente){
    
    if(fondo===''){
      //console.log('casaaaaaaaaaaaa',fondo,'---------');
      localStorage.setItem('fondo','backgroundClaro');
      this.imagen_base= localStorage.getItem('fondo');
    }else{
      this.imagen_base= localStorage.getItem('fondo');
    }
    if(fuente===''){
      //console.log('casaaaaaaaaaaaa',fondo,'---------');
      localStorage.setItem('fuente','fuente1');
      this.fuente_base= localStorage.getItem('fuente');
    }else{
      this.fuente_base= localStorage.getItem('fuente');
    }
  }


  ngOnInit() {
  }
  

  guardar(){
    if(this.fuente_base==="1"){
      
      localStorage.setItem('fuente','fuente1');
      this.fuente_base=localStorage.getItem('fuente');
    }
    if(this.fuente_base==="2"){
      
      localStorage.setItem('fuente','fuente2');
      this.fuente_base=localStorage.getItem('fuente');
    }
    if(this.fuente_base==="3"){
      
      localStorage.setItem('fuente','fuente3');
      this.fuente_base=localStorage.getItem('fuente');
    }
   
    console.log(localStorage.getItem('fuente'));
    //this.router.navigate(['/home']);
  }
  checkValue(event){
    
    this.fuente_base=event.detail.value;
    
  }

}
