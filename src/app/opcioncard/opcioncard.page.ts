import { Component, OnInit } from '@angular/core';
import { Rojo } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-opcioncard',
  templateUrl: './opcioncard.page.html',
  styleUrls: ['./opcioncard.page.scss'],
})
export class OpcioncardPage implements OnInit {

  cards: Rojo [] = [];
  azarCard;
  resp: any [];
  title: string;
  ans;

  constructor( private datalocal: DataLocalService ) { }

  ngOnInit() {
    this.datalocal.firstTime();
    this.datalocal.getCardsColor('Rojas')
    .then( resp => {
      console.log(resp);
      const randomNum = Math.trunc(Math.random() * (resp.length - 0) + 0);
      this.azarCard = resp[randomNum];
      this.resp = this.azarCard.resp;
      this.title = this.azarCard.question;
    });
  }
  answer(event){
    this.ans = event.target.value;
    if (this.ans === this.azarCard.correct){
      console.log(true);
    }else{
      console.log(false);
    }
  }
}
