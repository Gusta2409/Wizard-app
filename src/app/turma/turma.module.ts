import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TurmaRoutingModule } from './turma-routing.module';
import { TurmaPage } from './turma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaRoutingModule
  ],
  declarations: [TurmaPage]
})
export class TurmaModule {}