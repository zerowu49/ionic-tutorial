import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentLocPage } from './current-loc.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentLocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentLocPageRoutingModule {}
