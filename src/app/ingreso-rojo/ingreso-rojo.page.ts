import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ingreso-rojo',
  templateUrl: './ingreso-rojo.page.html',
  styleUrls: ['./ingreso-rojo.page.scss'],
})
export class IngresoRojoPage implements OnInit {

  temas={
    imagen_fondo: '',
    fuente_tema: ''
   
  };
  
  imagen_base:string;
  fuente_base: string;
  
  res1;
  res2;
  res3;
  res4;
  informacion={
    res:[],
    correct:'',
    question:'',
   
  }  

  rojo=[]
  
  constructor(private storage:Storage, public alertController: AlertController) {
    this.validar_fondo(localStorage.getItem('fondo'),localStorage.getItem('fuente'))
    this.imagen_base= localStorage.getItem('fondo');
    this.fuente_base=localStorage.getItem('fuente');
    //console.log('+++++++',this.imagen_base)
    this.storage.get('Rojas').then((val) => {
      console.log("tarjeta roja:",val)
      for(let i =0;i<val.length;i++){
        this.rojo.push(val[0]);
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
    this.informacion.res.push(this.res1);
    this.informacion.res.push(this.res2);
    this.informacion.res.push(this.res3);
    this.informacion.res.push(this.res4);
    
    this.rojo.push(this.informacion);

   
    await this.storage.set('Rojas', this.rojo);
    await this.presentAlert();

  }
}
