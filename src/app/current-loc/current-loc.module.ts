import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentLocPageRoutingModule } from './current-loc-routing.module';

import { CurrentLocPage } from './current-loc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentLocPageRoutingModule
  ],
  declarations: [CurrentLocPage]
})
export class CurrentLocPageModule {}
