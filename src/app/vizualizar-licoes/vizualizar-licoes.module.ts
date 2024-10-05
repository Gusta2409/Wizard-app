import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VizualizarLicoesPageRoutingModule } from './vizualizar-licoes-routing.module';
import { VizualizarLicoesPage } from './vizualizar-licoes.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizarLicoesPageRoutingModule
  ],
  declarations: [VizualizarLicoesPage]
})
export class VizualizarLicoesPageModule {}
