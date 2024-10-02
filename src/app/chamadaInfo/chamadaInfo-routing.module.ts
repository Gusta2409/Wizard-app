import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadaInfoPage } from './chamadaInfo.page';

const routes: Routes = [
  {
    path: '',
    component: ChamadaInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadaInfoRoutingModule {}