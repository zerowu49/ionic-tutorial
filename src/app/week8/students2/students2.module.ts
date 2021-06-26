import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Students2PageRoutingModule } from './students2-routing.module';

import { Students2Page } from './students2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Students2PageRoutingModule
  ],
  declarations: [Students2Page]
})
export class Students2PageModule {}
