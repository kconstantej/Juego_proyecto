import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Verde } from '../interfaces/interfaces';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-actuacard',
  templateUrl: './actuacard.page.html',
  styleUrls: ['./actuacard.page.scss'],
})
export class ActuacardPage implements OnInit {

  cards: Verde [] = [];
  azarCard;
  pista: string;
  title: string;
  ans: string;
  cambio;
  equipos;
  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;

  constructor(private datalocal: DataLocalService, private router: Router, private storage: Storage) { 
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
  }

  ngOnInit() {
    this.carga();
  }

  validar_fondo(fondo){
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      this.storage.set('temporizador', 1);
      console.log("casaaaaaaaaaaaa",this.imagen_base);
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
  }


  async carga(){
    await this.datalocal.getCardsColor('Verdes')
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
    this.router.navigate(['/dado-ganador'])
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
