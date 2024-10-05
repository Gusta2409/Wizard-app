import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VizualizarLicoesPage } from './vizualizar-licoes.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizarLicoesPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VizualizarLicoesPageRoutingModule {}
