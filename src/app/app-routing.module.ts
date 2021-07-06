import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts/index',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    redirectTo: 'contacts/index',
    pathMatch: 'full'
  },
  {
    path: 'contacts/index',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'contacts/add-contact',
    loadChildren: () => import('./contacts/add-contact/add-contact.module').then(m => m.AddContactPageModule),
  },
  {
    path: 'contacts/edit-contact/:contactId',
    loadChildren: () => import('./contacts/edit-contact/edit-contact.module').then(m => m.EditContactPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
