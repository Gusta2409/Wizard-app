import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaInfoPage } from './turmaInfo.page';

const routes: Routes = [
  {
    path: '',
    component: TurmaInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaInfoRoutingModule {}