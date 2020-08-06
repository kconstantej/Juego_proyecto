import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-pantalla-ganador',
  templateUrl: './pantalla-ganador.page.html',
  styleUrls: ['./pantalla-ganador.page.scss'],
})
export class PantallaGanadorPage implements OnInit {

  equipo;

  constructor( private datalocal:DataLocalService, private storage:Storage ) { }

  ngOnInit() {

    this.storage.get('equipo').then((valores)=>{

      if(valores[0].juego.length === 0){
        this.equipo = valores[0].equipo
      }
      
      if(valores[1].juego.length === 0){
        this.equipo = valores[1].equipo
      }
    })
  }

}
