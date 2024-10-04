import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VizualizarAlunosPage } from './vizualizar-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizarAlunosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VizualizarAlunosPageRoutingModule {}
