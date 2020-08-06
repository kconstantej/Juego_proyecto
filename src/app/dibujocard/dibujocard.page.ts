import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Verde } from '../interfaces/interfaces';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dibujocard',
  templateUrl: './dibujocard.page.html',
  styleUrls: ['./dibujocard.page.scss'],
})
export class DibujocardPage implements OnInit {

  cards: Verde [] = [];
  azarCard;
  pista: string;
  title: string;
  ans: string;
  cambio;
  equipos;

  constructor(private datalocal: DataLocalService, private router: Router, private storage: Storage ) { }

  ngOnInit() {
   this.carga();
  }
  async carga(){
    await this.datalocal.getCardsColor('Azules')
    .then( resp => {
      console.log(resp);
      const randomNum = Math.trunc(Math.random() * (resp.length - 0) + 0);
      this.azarCard = resp[randomNum];
      this.pista = this.azarCard.pista;
      this.ans = this.azarCard.correct;
    });
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
