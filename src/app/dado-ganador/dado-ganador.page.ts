import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-dado-ganador',
  templateUrl: './dado-ganador.page.html',
  styleUrls: ['./dado-ganador.page.scss'],
})
export class DadoGanadorPage implements OnInit {
  temas={
    imagen_fondo: ''
  };

  inicio;

  imagen_base:string;
  constructor( private router: Router, private storage: Storage) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    console.log('home',this.imagen_base);
    //this.muestra();
   }
   ngOnInit() {
    // this.storage.get('jugando').then((valor) =>{

    //   this.inicio = valor;
    //   console.log('DADO GANADOR DE BORIS '+this.inicio);

    // });
    
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
  random() {
    //console.log(this.informacion);
    let rd = Math.floor(Math.random()*((5-1)+1))+1;
    console.log(rd);
    this.router.navigate(['/dado-posicion',rd])
    
  }
  //  muestra(){
  //   console.log('entro en muestra');
  //    this.storage.get('jugando').then(recv=>{
  //     this.equipo=recv;
  //     console.log('muestra',this.equipo);
  //   });
  // }


}

