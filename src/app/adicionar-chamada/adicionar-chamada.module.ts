import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdicionarChamadaPage } from './adicionar-chamada.page';
import { AdicionarChamadaRoutingModule } from './adicionar-chamada-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarChamadaRoutingModule
  ],
  declarations: [AdicionarChamadaPage]
})
export class AdicionarChamadaModule {}