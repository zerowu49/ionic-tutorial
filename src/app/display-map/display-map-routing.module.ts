import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayMapPage } from './display-map.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayMapPageRoutingModule {}
