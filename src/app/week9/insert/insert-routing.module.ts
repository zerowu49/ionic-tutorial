import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertPage } from './insert.page';

const routes: Routes = [
  {
    path: '',
    component: InsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertPageRoutingModule {}
