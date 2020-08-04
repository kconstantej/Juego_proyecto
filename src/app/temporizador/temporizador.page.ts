import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {
  [x: string]: any;

  temas={
    imagen_fondo: ''
   
  };
  
  imagen_base:string;

  
  constructor(private storage: Storage,public alertController: AlertController,private router:Router) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');

    
    
  }
  validar_fondo(fondo){
    
    if(fondo===''){
      this.imagen_base= 'backgroundClaro';
      localStorage.setItem('fondo',this.imagen_base);
      
    }else{
      this.imagen_base=localStorage.getItem('fondo');
    
      
    }
  }
  tiempo='';
  

  ngOnInit() {
  }
  checkValue(event){
    
    this.tiempo=event.detail.value;
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Temporizador',
      message: 'Temporizador actualizado exitosamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async guardar(){
    //console.log(this.tiempo)
    let temporizador={
      tiempo:this.tiempo
    };
    await this.storage.set('temporizador', this.tiempo);
    await this.storage.get('temporizador').then((val) => {
      
      console.log('temporizador=', val);
    });
    await this.presentAlert();
    this.router.navigate(['/configuraciones']);

    
  }


}