import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferBookPage } from './offer-book.page';

const routes: Routes = [
  {
    path: '',
    component: OfferBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferBookPageRoutingModule {}
