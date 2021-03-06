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
  },
  {
    path: 'opcioncard',
    loadChildren: () => import('./opcioncard/opcioncard.module').then( m => m.OpcioncardPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./equipos/equipos.module').then( m => m.EquiposPageModule)
  },
  {
    path: 'equipo-random/:id',
    loadChildren: () => import('./equipo-random/equipo-random.module').then( m => m.EquipoRandomPageModule)
  },
  {
    path: 'lanzar-dado',
    loadChildren: () => import('./lanzar-dado/lanzar-dado.module').then( m => m.LanzarDadoPageModule)
  },
  {
    path: 'dado/:id',
    loadChildren: () => import('./dado/dado.module').then( m => m.DadoPageModule)
  },
  {
    path: 'morada',
    loadChildren: () => import('./morada/morada.module').then( m => m.MoradaPageModule)
  },
  {
    path: 'opcioncard',
    loadChildren: () => import('./opcioncard/opcioncard.module').then( m => m.OpcioncardPageModule)
  },
  {
    path: 'dibujocard',
    loadChildren: () => import('./dibujocard/dibujocard.module').then( m => m.DibujocardPageModule)
  },
  {
    path: 'actuacard',
    loadChildren: () => import('./actuacard/actuacard.module').then( m => m.ActuacardPageModule)
  },
  {
    path: 'anagrama',
    loadChildren: () => import('./anagrama/anagrama.module').then( m => m.AnagramaPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'ingreso-rojo',
    loadChildren: () => import('./ingreso-rojo/ingreso-rojo.module').then( m => m.IngresoRojoPageModule)
  },
  {
    path: 'ingreso-verde',
    loadChildren: () => import('./ingreso-verde/ingreso-verde.module').then( m => m.IngresoVerdePageModule)
  },
  {
    path: 'ingreso-amarillo',
    loadChildren: () => import('./ingreso-amarillo/ingreso-amarillo.module').then( m => m.IngresoAmarilloPageModule)
  },
  {
    path: 'ingreso-azul',
    loadChildren: () => import('./ingreso-azul/ingreso-azul.module').then( m => m.IngresoAzulPageModule)
  },
  {
    path: 'dado-ganador',
    loadChildren: () => import('./dado-ganador/dado-ganador.module').then( m => m.DadoGanadorPageModule)
  },
  {
    path: 'dado-posicion/:id',
    loadChildren: () => import('./dado-posicion/dado-posicion.module').then( m => m.DadoPosicionPageModule)
  },  {
    path: 'pantalla-ganador',
    loadChildren: () => import('./pantalla-ganador/pantalla-ganador.module').then( m => m.PantallaGanadorPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
