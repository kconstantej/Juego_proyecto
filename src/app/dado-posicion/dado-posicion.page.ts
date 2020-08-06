import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataLocalService } from '../services/data-local.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dado-posicion',
  templateUrl: './dado-posicion.page.html',
  styleUrls: ['./dado-posicion.page.scss'],
})
export class DadoPosicionPage implements OnInit {
  arg=null;
  imagen=null;
  color=null;
  enlace=null;
  temas={
    imagen_fondo: ''
  };

  equipos;
  
  imagen_base:string;
  constructor(public activateRoute: ActivatedRoute, private router: Router, private datalocal:DataLocalService, private storage : Storage) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    console.log('home',this.imagen_base)
    
   }
   pagina(){
      this.router.navigate(["/lanzar-dado"]);
      console.log(this.enlace);
      this.Cambio_nombre();
      //this.datalocal.presentAlertMultipleButtons("Juega el Otro Equipo","valor")
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

  ngOnInit() {

    this.arg=this.activateRoute.snapshot.paramMap.get('id');
    
    if(this.arg==2){
      this.imagen='./assets/img/Amarillo.png';
      this.color='Amarillo';
    }if(this.arg==3){
      this.imagen='./assets/img/Azul.png';
      this.color='Azul';
    }if(this.arg==5){
      this.imagen='./assets/img/Morado.png';
      this.color='Morado';
    }if(this.arg==1){
      this.imagen='./assets/img/Rojo.png';
      this.color='Rojo';
    }if(this.arg==4){
      this.imagen='./assets/img/Verde.png';
      this.color='Verde';
    }
    // let equipo_juega = "";

    // this.datalocal.getJugando().then((kk) =>{

    //   equipo_juega = kk;
    //   console.log("EQUIPO JUEGA"+kk);
    //   console.log("EQUIPO JUEGA 2 "+equipo_juega);
    //   this.Nombre_equipo(equipo_juega);
    //   this.datalocal.cambiar_ganador(equipo_juega);
    // });
   
    
    //this.datalocal.presentAlertMultipleButtons(equipo_juega);
  
    console.log(this.arg);
    console.log(this.imagen);
  }

  // async Nombre_equipo(equipo_juega){
  //   await this.datalocal.cambiar_ganador(equipo_juega);
  // }

  async Cambio_nombre(){
    await this.storage.get('equipo').then(recv=>{
      this.equipos=recv;
      console.log('equipos',this.equipos);
    });
    await this.storage.get('jugando').then(otro=>{

      if(this.equipos[0].equipo===otro){
        this.datalocal.cambiar_ganador(this.equipos[1].equipo,this.arg);

      }if(this.equipos[1].equipo===otro){

        this.datalocal.cambiar_ganador(this.equipos[0].equipo,this.arg);

      }
      console.log(this.equipos[0].equipo, '=', otro);
      console.log(this.equipos[1].equipo, '=', otro);

    });
    
    //this.router.navigate(['/lanzar-dado']);

  }


}
