import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VizualizarAlunosPage } from './vizualizar-alunos.page';
import { VizualizarAlunosPageRoutingModule } from './vizualizar-alunos-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizarAlunosPageRoutingModule
  ],
  declarations: [VizualizarAlunosPage]
})
export class VizualizarAlunosPageModule {}
