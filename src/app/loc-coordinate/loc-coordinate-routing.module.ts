import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocCoordinatePage } from './loc-coordinate.page';

const routes: Routes = [
  {
    path: '',
    component: LocCoordinatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocCoordinatePageRoutingModule {}
