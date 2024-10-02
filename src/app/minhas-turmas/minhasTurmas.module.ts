import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MinhasTurmasRoutingModule } from './minhasTurmas-routing.module';
import { MinhasTurmasPage } from './minhasTurmas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasTurmasRoutingModule
  ],
  declarations: [MinhasTurmasPage]
})
export class MinhasTurmasModule {}