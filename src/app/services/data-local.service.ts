import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CardsDBService } from './cards-db.service';
import { Rojo, Verde, Amarillo } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  juega={
    id:'',
    equipo:''
  }
  eq=[{
    id:'',
    equipo:'',
    juego: []
  },{
    id:'',
    equipo:'',
    juego: []
  }
]

equipos;
// rojo  amarillo   azul   verde   morado
  juego = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
  juego2 = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]

  posicion_equipo1;
  posicion_equipo2;



  cardsR: Rojo [] = [];
  cardsG: Verde [] = [];
  cardsB: Verde [] = [];
  cardsY: Amarillo [] = [];


  constructor( public alertController: AlertController, private storage: Storage, private cardsdb: CardsDBService, private router: Router) { }


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
  
  async equipo(equipo2:any, id2:any, equipo1:any, id1:any  ){
    this.eq = [{
      id: id1,
      equipo: equipo1,
      juego: this.juego
    },
  {
    id: id2,
    equipo: equipo2,
    juego: this.juego2
  }];
    return await this.storage.set('equipo', this.eq);
  }

  async jugando(equipo:any, id:any ){
    this.juega = {
      id: id,
      equipo: equipo
    };
    return await this.storage.set('jugando', this.juega);
  }



  async cambiar(equipo:any){
    await this.storage.set('jugando', equipo);
    this.presentAlertMultipleButtons(equipo,"Fallaste");
  }

  async cambiar_ganador(equipo:any,id_dado:any){
    let a = parseInt(id_dado);
    this.Seguimiento(a);
    console.log("numero del dado "+ a)

    await this.storage.set('jugando', equipo);
    this.presentAlertMultipleButtons(equipo,"Moviste tu Ficha .....?");
    
  }

  

 getJugando(){
    
    return this.storage.get('jugando');
    
  }

  async presentAlertMultipleButtons(equipo,condicion) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${condicion}`,
      subHeader: 'CONTINUA EL EQUIPO :',
      message: `<h1> ${equipo}</h1> `,
      buttons: ['Ok']
    });

    await alert.present();
  }


 async removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
       await arr.splice( i, 1 );
        

    }
}


  async Seguimiento(posicion){

    await this.storage.get('equipo').then(recv=>{
      this.equipos=recv;
      console.log('equipos',this.equipos);
    });

    await this.storage.get('jugando').then(otro=>{
      


      if(this.equipos[0].equipo===otro){

        if (this.equipos[0].juego.length === 0){

          this.router.navigate(["/pantalla-ganador"]);
        }

        for(var i in this.equipos[0].juego){
          //this.removeItemFromArr(this.equipos[0].juego,this.equipos[0].juego[i])

          while(posicion>0){

            this.removeItemFromArr(this.equipos[1].juego,posicion)
            posicion --;

          }

        }

        const eq = [{
          id: this.equipos[0].id,
          equipo: this.equipos[0].equipo,
          juego: this.equipos[0].juego
        },
      {
        id: this.equipos[1].id,
        equipo: this.equipos[1].equipo,
        juego: this.equipos[1].juego
      }];

        this.storage.set("equipo",eq)

        console.log("Equipo Removido ", eq)
        console.log("REMOVE VECTOR ",this.equipos[1].juego);
        
      }
      

      if(this.equipos[1].equipo===otro){
        var j = 0;
        if (this.equipos[1].juego.length === 0){

          this.router.navigate(["/pantalla-ganador"]);
        }

        for(var i in this.equipos[1].juego){
        
          while(posicion>0){

            this.removeItemFromArr(this.equipos[0].juego,posicion)
            posicion --;

          }

    


        }

        const eq = [{
          id: this.equipos[0].id,
          equipo: this.equipos[0].equipo,
          juego: this.equipos[0].juego
        },
      {
        id: this.equipos[1].id,
        equipo: this.equipos[1].equipo,
        juego: this.equipos[1].juego
      }];

        this.storage.set("equipo",eq)

        console.log("Equipo Removido ", eq)
        console.log("REMOVE VECTOR 2",this.equipos[0].juego);


      }


      console.log(this.equipos[0].equipo, '=', otro);
      console.log(this.equipos[1].equipo, '=', otro);



    });
    
    

  }
}
