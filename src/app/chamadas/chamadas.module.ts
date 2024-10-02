import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChamadasRoutingModule } from './chamadas-routing.module';
import { ChamadasPage } from './chamadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamadasRoutingModule
  ],
  declarations: [ChamadasPage]
})
export class ChamadasModule {}