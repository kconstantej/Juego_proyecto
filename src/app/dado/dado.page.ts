import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.page.html',
  styleUrls: ['./dado.page.scss'],
})
export class DadoPage implements OnInit {
  arg=null;
  imagen=null;
  color=null;
  enlace=null;
  temas={
    imagen_fondo: ''
  };
  
  imagen_base:string;
  constructor(public activateRoute: ActivatedRoute, private router: Router) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    console.log('home',this.imagen_base)
    
   }
   pagina(){
      this.router.navigate([this.enlace]);
      console.log(this.enlace);
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
    this.arg=this.activateRoute.snapshot.paramMap.get('id');
    if(this.arg==1){
      this.imagen='./assets/img/Amarillo.png';
      this.color='Amarillo';
      this.enlace='/anagrama';
    }if(this.arg==2){
      this.imagen='./assets/img/Azul.png';
      this.color='Azul';
      this.enlace='/dibujocard';
    }if(this.arg==3){
      this.imagen='./assets/img/Morado.png';
      this.color='Morado';
      this.enlace='/morada'
    }if(this.arg==4){
      this.imagen='./assets/img/Rojo.png';
      this.color='Rojo';
      this.enlace='/opcioncard';
    }if(this.arg==5){
      this.imagen='./assets/img/Verde.png';
      this.color='Verde';
      this.enlace='/actuacard';
    }
    console.log(this.arg);
    console.log(this.imagen);
  }


}
