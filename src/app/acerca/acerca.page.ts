import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  desarrolladores=[
    {
      icono:'assets/img/boris.png',
      nombre: 'Boris Tapia',
      celular:'0998288887',
      email:'Btapiaf@est.ups.edu.ec'
    },
    {
      icono:'assets/img/carla.png',
      nombre: 'Carla Guamanzara',
      celular:'0995037087',
      email:'cguamanzara@est.ups.edu.ec'
    },
    {
      icono:'assets/img/chacha.png',
      nombre: 'Kevin Chacha',
      celular:'0967809798',
      email:'kchacham@est.ups.edu.ec'
    },
    {
      icono:'assets/img/ken.png',
      nombre: 'Ken Constante',
      celular:'0996543366',
      email:'kconstantej@est.ups.edu.ec'
    },
    {
      icono:'assets/img/tony.png',
      nombre: 'Anthony Cabezas',
      celular:'0998288887',
      email:'ecabezasm1@est.ups.edu.ec'
    }
  ];
 


  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;
  
  
  constructor(public alertCtr: AlertController) {
    this.validar_fondo(localStorage.getItem('fondo'))
    this.imagen_base= localStorage.getItem('fondo');
    console.log('home',this.imagen_base)
    
    
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
  }
  async presentAlert(desarrolladores) {
  
    
    const alert = await this.alertCtr.create({
      message:`<ion-card>
      <ion-card-header color="primary">
        <ion-card-title class="ion-text-center">${desarrolladores.nombre}</ion-card-title>
        
    </ion-card-header>
    <ion-card-content>
    <ion-list>
    <ion-item>
    <ion-img src="${desarrolladores.icono}"></ion-img>
    </ion-item>
      <ion-list>
        <ion-item>
        <ion-icon name="phone-portrait-outline"></ion-icon>
          ${desarrolladores.celular}
        </ion-item>
        <ion-item>
        <ion-icon name="mail-open-outline" color="primary"></ion-icon>
          ${desarrolladores.email}
        </ion-item>
      </ion-list>
      
    </ion-card-content>
    </ion-card>
    `,
     
      backdropDismiss: false,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            
          }
        }
      ]
    });

    await alert.present();
}

}
interface desarrolladores{

}
