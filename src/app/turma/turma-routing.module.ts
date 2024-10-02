import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaPage } from './turma.page';

const routes: Routes = [
  {
    path: '',
    component: TurmaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule {}