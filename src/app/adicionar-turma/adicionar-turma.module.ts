import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdicionarTurmaPage } from './adicionar-turma.page';
import { AdicionarTurmaRoutingModule } from './adicionar-turma-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarTurmaRoutingModule
  ],
  declarations: [AdicionarTurmaPage]
})
export class AdicionarTurmaModule {}