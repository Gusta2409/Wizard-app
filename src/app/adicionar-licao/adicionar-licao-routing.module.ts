import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarLicaoPage } from './adicionar-licao.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarLicaoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarLicaoRoutingModule {}