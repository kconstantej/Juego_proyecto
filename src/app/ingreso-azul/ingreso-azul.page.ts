import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-azul',
  templateUrl: './ingreso-azul.page.html',
  styleUrls: ['./ingreso-azul.page.scss'],
})
export class IngresoAzulPage implements OnInit {

  temas={
    imagen_fondo: '',
    fuente_tema: ''
   
  };
  
  imagen_base:string;
  fuente_base: string;
  
  informacion={
    pista:'',
    correct:'',
    
   
  }  
  azules=[];
  constructor(private storage: Storage,public alertController: AlertController) {
    this.validar_fondo(localStorage.getItem('fondo'),localStorage.getItem('fuente'))
    this.imagen_base= localStorage.getItem('fondo');
    this.fuente_base=localStorage.getItem('fuente');
    this.storage.get('Azules').then((val) => {
      for(let i =0;i<val.length;i++){
        this.azules.push(val[0]);
      }      
    });
    

   }
   validar_fondo(fondo,fuente){
    
    if(fondo===''){
      
      localStorage.setItem('fondo','backgroundClaro');
      this.imagen_base= localStorage.getItem('fondo');
    }else{
      this.imagen_base= localStorage.getItem('fondo');
    }
    if(fuente===''){
   
      localStorage.setItem('fuente','fuente1');
      this.fuente_base= localStorage.getItem('fuente');
    }else{
      this.fuente_base= localStorage.getItem('fuente');
    }
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Temporizador',
      message: 'Tarjeta guardada',
      buttons: ['OK']
    });

    await alert.present();
  }

  async registroDatos(){
    
    this.azules.push(this.informacion);


    await this.storage.set('Azules', this.azules);
    await this.presentAlert();
    
  }

}
