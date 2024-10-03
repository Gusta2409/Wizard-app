import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarTurmaPage } from './editar-turma.page';
import { EditarTurmaRoutingModule } from './editar-turma-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTurmaRoutingModule
  ],
  declarations: [EditarTurmaPage]
})
export class EditarTurmaModule {}