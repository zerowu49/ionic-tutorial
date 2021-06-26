import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Students3Page } from './students3.page';

const routes: Routes = [
  {
    path: '',
    component: Students3Page
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Students3PageRoutingModule {}
