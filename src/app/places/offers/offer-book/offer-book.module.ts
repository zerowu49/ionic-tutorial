import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferBookPageRoutingModule } from './offer-book-routing.module';

import { OfferBookPage } from './offer-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBookPageRoutingModule
  ],
  declarations: [OfferBookPage]
})
export class OfferBookPageModule {}
