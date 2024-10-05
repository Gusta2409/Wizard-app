import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdicionarLicaoRoutingModule } from './adicionar-licao-routing.module';
import { AdicionarLicaoPage } from './adicionar-licao.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarLicaoRoutingModule
  ],
  declarations: [AdicionarLicaoPage]
})
export class AdicionarLicaoModule {}