import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Verde } from '../interfaces/interfaces';
import { timer } from 'rxjs';

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

  constructor(private datalocal: DataLocalService ) { }

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

}
