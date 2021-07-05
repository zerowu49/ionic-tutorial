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
    path: 'display-map',
    loadChildren: () => import('./display-map/display-map.module').then(m => m.DisplayMapPageModule)
  },
  {
    path: 'current-loc',
    loadChildren: () => import('./current-loc/current-loc.module').then(m => m.CurrentLocPageModule)
  },
  {
    path: 'loc-coordinate',
    loadChildren: () => import('./loc-coordinate/loc-coordinate.module').then(m => m.LocCoordinatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
