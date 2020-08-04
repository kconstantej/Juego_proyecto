import { Component, OnInit } from '@angular/core';
import { Amarillo } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { timer } from 'rxjs';
import { ToastController } from '@ionic/angular';

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
  constructor(private datalocal: DataLocalService, private toastCtrl :ToastController) { }
  async presentarT(mensaje:string){
    const toast=await  this.toastCtrl.create({
      message:mensaje,
      duration:2000
    });
    toast.present();
  }
  ngOnInit() {
    this.datalocal.getCardsColor('Amarillo')
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
      console.log(true);
    }else{
      console.log(false);
      this.presentarT('Fallaste sigue intentadolo !!');
    }
  }
  muestra(){
    document.getElementById('oculto').style.display = "block";
    timer(2000).subscribe(x => { 
      document.getElementById('oculto').style.display = "none";
     });
  }

}
