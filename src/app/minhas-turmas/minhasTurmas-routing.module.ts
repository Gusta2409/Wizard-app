import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhasTurmasPage } from './minhasTurmas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasTurmasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhasTurmasRoutingModule {}