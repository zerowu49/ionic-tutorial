import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Students1Page } from './students1.page';

const routes: Routes = [
  {
    path: '',
    component: Students1Page
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
export class Students1PageRoutingModule {}
