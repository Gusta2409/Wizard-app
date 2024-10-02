import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: 'euSou',
    loadChildren: () => import('./eu-sou/euSou.module').then( m => m.EuSouPageModule)
  },
  {
    //TESTE
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    //TESTE
    path: 'minhas-turmas',
    loadChildren: () => import('./minhas-turmas/minhasTurmas.module').then(m => m.MinhasTurmasModule)
  },
  {
    //TESTE
    path: 'turma/:diaSemana',
    loadChildren: () => import('./turma/turma.module').then(m => m.TurmaModule)
  },
  {
    //TESTE
    path: 'turma-info/:idTurma',
    loadChildren: () => import('./turma-info/turmaInfo.module').then(m => m.TurmaInfoModule)
  },
  {
    //TESTE
    path: 'chamadas',
    loadChildren: () => import('./chamadas/chamadas.module').then(m => m.ChamadasModule)
  },
  {
    //TESTE
    path: 'chamada-info',
    loadChildren: () => import('./chamadaInfo/chamadaInfo.module').then(m => m.ChamadaInfoModule)
  },
  {
    path: 'home/:tipoUsuario',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'euSou',
    pathMatch: 'full'
  },
  {
    path: 'login/:tipoUsuario',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro/:tipoUsuario',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'wizard',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
