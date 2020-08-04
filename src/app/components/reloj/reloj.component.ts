import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss'],
})
export class RelojComponent implements OnInit {
  timer: number;

  time :BehaviorSubject<string>=new BehaviorSubject('00:00');
  iniciaren =1 ;
  constructor(private storage: Storage) {
   }
   async iniciar(duracion:number){
   
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
  async ngOnInit() {
    await this.storage.get('temporizador').then((val) => {   
      this.iniciar(val);
    });
    
  }
  

}
