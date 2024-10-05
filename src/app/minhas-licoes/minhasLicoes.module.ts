import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MinhasLicoesRoutingModule } from './minhasLicoes-routing.module';
import { MinhasLicoesPage } from './minhasLicoes.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasLicoesRoutingModule
  ],
  declarations: [MinhasLicoesPage]
})
export class MinhasLicoesModule {}