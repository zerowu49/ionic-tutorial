import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationsPageRoutingModule } from './creations-routing.module';

import { CreationsPage } from './creations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationsPageRoutingModule
  ],
  declarations: [CreationsPage]
})
export class CreationsPageModule {}
