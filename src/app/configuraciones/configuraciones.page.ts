import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { RouterModule, Router } from '@angular/router';
 let contador=0;
@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {
  temas={
    imagen_fondo: '',
    fuente_tema: ''
   
  };
  
  imagen_base:string;
  fuente_base: string;
  
  
  constructor( public router:Router, private iab: InAppBrowser) {
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
  inicializar(){
    contador=0;
  }
  opcion(){
    contador=contador+1;
    console.log(contador)
    if(contador==10){
      this.router.parseUrl('/ingresar');
      this.router.navigate(['/ingresar']);
      contador=0;
    }
  }

  openBlank(){
    this.iab.create('https://firebasestorage.googleapis.com/v0/b/angular-html-11.appspot.com/o/tablero.pdf?alt=media&token=3761634d-7aa4-484c-afbf-e4836b763072')
  }

  
}
