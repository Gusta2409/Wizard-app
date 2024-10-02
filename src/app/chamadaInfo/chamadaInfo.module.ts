import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChamadaInfoRoutingModule } from './chamadaInfo-routing.module';
import { ChamadaInfoPage } from './chamadaInfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamadaInfoRoutingModule
  ],
  declarations: [ChamadaInfoPage]
})
export class ChamadaInfoModule {}