import { Component, OnInit } from '@angular/core';
import { CardsDBService } from '../services/cards-db.service';
import { Rojo } from '../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-opcioncard',
  templateUrl: './opcioncard.page.html',
  styleUrls: ['./opcioncard.page.scss'],
})
export class OpcioncardPage implements OnInit {
  time :BehaviorSubject<string>=new BehaviorSubject('01:00');
  timer: number;
  cards: Rojo [] = [];
  azarCard;
  resp: any [];
  title: string;
  ans;
  constructor( private cardsdb: CardsDBService ) { }
  iniciar(duracion:number){
    this.timer=duracion*60;
    setInterval(()=>{
      this.actualizartiempo();
    },1000);
  }
  public disabled = false;

  public action() {
    this.disabled = !this.disabled;
  }
  actualizartiempo(){
    let minutos :any=this.timer/60;
    let segundos :any=this.timer % 60;
    minutos =String('0'+Math.floor(minutos)).slice(-2);
    segundos=String('0'+Math.floor(segundos)).slice(-2);

    const text=minutos+":"+segundos;
    this.time.next(text);
    --this.timer;
    if(this.timer<0){
      this.iniciar(0);
    }
  }
  
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
