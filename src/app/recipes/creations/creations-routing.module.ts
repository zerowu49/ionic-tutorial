import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationsPage } from './creations.page';

const routes: Routes = [
  {
    path: '',
    component: CreationsPage
  },  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationsPageRoutingModule {}
