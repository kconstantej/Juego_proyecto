import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'objetivos',
    loadChildren: () => import('./objetivos/objetivos.module').then( m => m.ObjetivosPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },
  {
    path: 'temporizador',
    loadChildren: () => import('./temporizador/temporizador.module').then( m => m.TemporizadorPageModule)
  },
  {
    path: 'temas',
    loadChildren: () => import('./temas/temas.module').then( m => m.TemasPageModule)
  },
  {
    path: 'estilos',
    loadChildren: () => import('./estilos/estilos.module').then( m => m.EstilosPageModule)
  },  {
    path: 'opcioncard',
    loadChildren: () => import('./opcioncard/opcioncard.module').then( m => m.OpcioncardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
