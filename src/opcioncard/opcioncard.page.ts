import { Component, OnInit } from '@angular/core';
import { CardsDBService } from '../services/cards-db.service';
import { Rojo } from '../interfaces/interfaces';

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

  constructor( private cardsdb: CardsDBService ) { }

  ngOnInit() {
    this.cardsdb.getQuestion()
    .subscribe( resp => {
      this.cards.push( ...resp.rojo );
      const randomNum = Math.trunc(Math.random() * (this.cards.length - 0) + 0);
      this.azarCard = this.cards[randomNum];
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
