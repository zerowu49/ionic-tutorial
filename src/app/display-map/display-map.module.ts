import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayMapPageRoutingModule } from './display-map-routing.module';

import { DisplayMapPage } from './display-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayMapPageRoutingModule
  ],
  declarations: [DisplayMapPage]
})
export class DisplayMapPageModule {}
