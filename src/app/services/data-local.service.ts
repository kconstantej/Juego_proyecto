import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CardsDBService } from './cards-db.service';
import { Rojo, Verde, Amarillo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  eq = {
    id: " ",
    equipo: " "
  }

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
  
  async equipo(equipo2:any, id2:any ){
    this.eq = {
      id: id2,
      equipo: equipo2
    }
    return await this.storage.set('equipo', this.eq);
  }
}
