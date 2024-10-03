import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarTurmaPage } from './adicionar-turma.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarTurmaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarTurmaRoutingModule {}