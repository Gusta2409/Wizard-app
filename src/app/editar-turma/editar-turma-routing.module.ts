import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarTurmaPage } from './editar-turma.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTurmaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarTurmaRoutingModule {}