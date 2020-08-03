import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CardsDBService } from './cards-db.service';
import { Rojo, Verde } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  cardsR: Rojo [] = [];
  cardsG: Verde [] = [];
  cardsB: Verde [] = [];
  cards;
  azarCard;

  constructor(private storage: Storage, private cardsdb: CardsDBService) { }


  firstTime(){
    this.cardsdb.getQuestion()
    .subscribe( resp => {
      this.cardsR.push( ...resp.rojo );
      this.cardsG.push( ...resp.verde );
      this.cardsB.push( ...resp.azul );
    });
    this.storage.set('Rojas', this.cardsR);
    this.storage.set('Verdes', this.cardsG);

+
+    this.storage.set('Azules', this.cardsB);
  }

  getCardsColor( color: string ){
    return this.storage.get(color);
  }
}
