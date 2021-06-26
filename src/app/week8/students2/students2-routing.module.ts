import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Students2Page } from './students2.page';

const routes: Routes = [
  {
    path: '',
    component: Students2Page
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
export class Students2PageRoutingModule {}
