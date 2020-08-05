import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ingreso-amarillo',
  templateUrl: './ingreso-amarillo.page.html',
  styleUrls: ['./ingreso-amarillo.page.scss'],
})
export class IngresoAmarilloPage implements OnInit {

  temas={
    imagen_fondo: '',
    fuente_tema: ''
   
  };
  
  imagen_base:string;
  fuente_base: string;

  informacion={
    pista:'',
    correct:'',
    palabra:'',
   
  }  

  amarillo=[]
  
  
  constructor(private storage: Storage,public alertController: AlertController) {
    this.validar_fondo(localStorage.getItem('fondo'),localStorage.getItem('fuente'))
    this.imagen_base= localStorage.getItem('fondo');
    this.fuente_base=localStorage.getItem('fuente');
    //console.log('+++++++',this.imagen_base)
    this.storage.get('Amarillo').then((val) => {
      for(let i =0;i<val.length;i++){
        this.amarillo.push(val[0]);
      }      
    });

   }
   validar_fondo(fondo,fuente){
    
    if(fondo===''){
      //console.log('casaaaaaaaaaaaa',fondo,'---------');
      localStorage.setItem('fondo','backgroundClaro');
      this.imagen_base= localStorage.getItem('fondo');
    }else{
      this.imagen_base= localStorage.getItem('fondo');
    }
    if(fuente===''){
      //console.log('casaaaaaaaaaaaa',fondo,'---------');
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
    
    this.amarillo.push(this.informacion);

   
    await this.storage.set('Amarillo', this.amarillo);
   
    await this.presentAlert();
  }

}
