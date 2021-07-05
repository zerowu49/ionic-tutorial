import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocCoordinatePageRoutingModule } from './loc-coordinate-routing.module';

import { LocCoordinatePage } from './loc-coordinate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocCoordinatePageRoutingModule
  ],
  declarations: [LocCoordinatePage]
})
export class LocCoordinatePageModule {}
