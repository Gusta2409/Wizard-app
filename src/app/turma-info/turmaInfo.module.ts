import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TurmaInfoRoutingModule } from './turmaInfo-routing.module';
import { TurmaInfoPage } from './turmaInfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaInfoRoutingModule
  ],
  declarations: [TurmaInfoPage]
})
export class TurmaInfoModule {}