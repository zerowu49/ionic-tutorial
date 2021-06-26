import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Students3PageRoutingModule } from './students3-routing.module';

import { Students3Page } from './students3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Students3PageRoutingModule
  ],
  declarations: [Students3Page]
})
export class Students3PageModule {}
