import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  componentes: Componente[]=[
    {
      icono: 'settings-outline',
      name: 'Configuraciones',
      redirectTo: '/configuraciones'
    },
    {
      icono: 'trophy-outline',
      name: 'Objetivos',
      redirectTo: '/objetivos'
    },
    {
      icono: 'information-circle-outline',
      name: 'Acerca de',
      redirectTo: '/acerca'
    }
  ];
  temas={
    imagen_fondo: '',
   
  };
  
  imagen_base:string;

  constructor(
    
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
    
    
  ) {
    localStorage.setItem("fondo","");
    this.initializeApp();
    this.storage.set('temporizador', 1);
    
  }
  

  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
}
interface Componente{
  icono: string,
  name: string,
  redirectTo: string;
}