import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {
  informacion = {
    nombre_equipo1: '',
    nombre_equipo2: ''
  };

  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  

  constructor(private router: Router,private navCtrl:NavController) {
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

  registroDatos() {
    console.log(this.informacion);
    let rd = Math.floor(Math.random()*((2-1)+1))+1;
    console.log(rd);
    if(rd==1){
      this.router.navigate(['/equipo-random',this.informacion.nombre_equipo1])
      console.log(this.informacion.nombre_equipo1);
    }
    if(rd==2){
      this.router.navigate(['/equipo-random',this.informacion.nombre_equipo2])
      console.log(this.informacion.nombre_equipo2);
    }
  }

  ngOnInit() {
  }

}
