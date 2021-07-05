import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./week10/index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'week10/create',
    loadChildren: () => import('./week10/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'week10/edit/:key',
    loadChildren: () => import('./week10/edit/edit.module').then(m => m.EditPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
