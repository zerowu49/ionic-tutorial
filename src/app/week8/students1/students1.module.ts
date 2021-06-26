import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Students1PageRoutingModule } from './students1-routing.module';

import { Students1Page } from './students1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Students1PageRoutingModule
  ],
  declarations: [Students1Page]
})
export class Students1PageModule {}
