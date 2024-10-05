import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarChamadaPage } from './adicionar-chamada.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarChamadaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarChamadaRoutingModule {}