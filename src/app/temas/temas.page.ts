import { Component, OnInit } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NavController } from '@ionic/angular';
//import { HomePage } from '../home/home.page.ts';


@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {
  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  

 
  constructor(private router:Router,private navCtrl: NavController) { 
    
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    
    console.log('+++++',this.imagen_base);
    
  }

  ngOnInit() {
  }
  oscuro(){
    this.imagen_base='backgroundOscuro'
    localStorage.setItem('fondo',this.imagen_base);
    console.log("casaaaaaaaaaaaaaaaaa",localStorage.getItem('fondo'));
    
    
  
    
   }
   claro(){
    this.imagen_base='backgroundClaro'
    localStorage.setItem('fondo',this.imagen_base);
    console.log("casaaaaaaaaaaaaaaaaa",localStorage.getItem('fondo'))
    
   }
   validar_fondo(fondo){
    
    if(fondo===''){
      console.log('casaaaaaaaaaaaa',fondo,'---------');
      localStorage.setItem('fondo','backgroundClaro');
      this.imagen_base= localStorage.getItem('fondo');
    }else{
      this.imagen_base= localStorage.getItem('fondo');
    }
  }
  routingViaAngular(){
    
    this.router.navigate(['/home']);
  }
  routingViaNavParams(){
    
    this.navCtrl.navigateForward(['/home']);
  }
}
