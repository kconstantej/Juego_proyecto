import { Component, OnInit } from '@angular/core';
import { Amarillo } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { timer } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
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
  constructor(private datalocal: DataLocalService, private toastCtrl :ToastController,private router: Router, private storage: Storage) { }

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
    this.router.navigate(['/lanzar-dado'])
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

