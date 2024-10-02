import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadasPage } from './chamadas.page';

const routes: Routes = [
  {
    path: '',
    component: ChamadasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadasRoutingModule {}