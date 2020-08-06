import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-pantalla-ganador',
  templateUrl: './pantalla-ganador.page.html',
  styleUrls: ['./pantalla-ganador.page.scss'],
})
export class PantallaGanadorPage implements OnInit {

  temas={
    imagen_fondo: '',
   
  };

  equipo;
  imagen_base:string;
  

  constructor( private datalocal:DataLocalService, private storage:Storage ) { 
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
  }

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

  validar_fondo(fondo){
    
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      console.log("casaaaaaaaaaaaa",this.imagen_base);
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
 
    
  }

  

}
