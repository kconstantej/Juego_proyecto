import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CardsDBService } from './cards-db.service';
import { Rojo, Verde, Amarillo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  cardsR: Rojo [] = [];
  cardsG: Verde [] = [];
  cardsB: Verde [] = [];
  cardsY: Amarillo [] = [];


  constructor( private storage: Storage, private cardsdb: CardsDBService ) { }


  async firstTime(){
    await this.cardsdb.getQuestion()
    .subscribe( resp => {
      console.log(resp);
      this.cardsR.push( ...resp.rojo );
      this.cardsG.push( ...resp.verde );
      this.cardsB.push( ...resp.azul );
      this.cardsY.push(...resp.amarillo)
      this.storage.set('Rojas', this.cardsR);
      this.storage.set('Verdes', this.cardsG);
      this.storage.set('Azules', this.cardsB);
      this.storage.set('Amarillo', this.cardsY);

    });
  }

  getCardsColor( color: string ){
    return this.storage.get(color);
  }
}
