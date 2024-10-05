import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhasLicoesPage } from './minhasLicoes.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasLicoesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhasLicoesRoutingModule {}