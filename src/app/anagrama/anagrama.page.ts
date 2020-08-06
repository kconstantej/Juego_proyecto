import { Component, OnInit } from '@angular/core';
import { Amarillo } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { timer } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {  Camera , CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.page.html',
  styleUrls: ['./anagrama.page.scss'],
})
export class AnagramaPage implements OnInit {
  cards: Amarillo [] = [];
  azarCard;
  resp: any [];
  pista: string;
  respuesta:string;
  palabra: string;
  ans: string;
  cambio;
  equipos;
  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  constructor(private datalocal: DataLocalService, private toastCtrl :ToastController,private router: Router, private storage: Storage,private camera:Camera,private webview: WebView,private socialSharing: SocialSharing) { 

    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
  }

  async presentarT(mensaje:string){
    const toast=await  this.toastCtrl.create({
      message:mensaje,
      duration:2000
    });
    toast.present();
  }
  
  
  ngOnInit() {
    this.amarillo();
  }

  async amarillo(){
    await this.datalocal.getCardsColor('Amarillo')
    .then( resp => {
      console.log(resp);
      const randomNum = Math.trunc(Math.random() * (resp.length - 0) + 0);
      this.azarCard = resp[randomNum];
      this.palabra=this.azarCard.palabra;
      this.pista = this.azarCard.pista;
      this.ans = this.azarCard.correct;
    });
  }

  validar_fondo(fondo){
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      this.storage.set('temporizador', 1);
      console.log("casaaaaaaaaaaaa",this.imagen_base);
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
  }

  answer(){
    if (this.ans === this.respuesta){
      this.presentarT('Respuesta Correcta ');
      this.acerto();
      console.log(true);
    }else{
      console.log(false);
      this.fallo();
      this.presentarT('Fallaste sigue intentadolo !!');
    }
  }
  muestra(){
    document.getElementById('oculto').style.display = "block";
    timer(2000).subscribe(x => { 
      document.getElementById('oculto').style.display = "none";
     });
  }
  acerto(){
    this.router.navigate(['/dado-ganador'])
  }

  async fallo(){
    await this.storage.get('equipo').then(recv=>{
      this.equipos=recv;
      console.log('equipos',this.equipos);
    });
    await this.storage.get('jugando').then(otro=>{

      if(this.equipos[0].equipo===otro){
        this.datalocal.cambiar(this.equipos[1].equipo);
        // this.storage.set('jugando', this.equipos[1]);
        // this.cambio=this.equipos[1].equipo;
      }if(this.equipos[1].equipo===otro){
        // this.storage.set('jugando', this.equipos[0]);
        // // this.cambio=this.equipos[0].equipo;
        this.datalocal.cambiar(this.equipos[0].equipo);

      }
      console.log(this.equipos[0].equipo, '=', otro);
      console.log(this.equipos[1].equipo, '=', otro);

    });
    
    this.router.navigate(['/lanzar-dado']);

  }

}

