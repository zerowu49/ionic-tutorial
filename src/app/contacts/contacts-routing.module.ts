import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: ':contactId',
    loadChildren: () => import('./contact-detail/contact-detail.module').then( m => m.ContactDetailPageModule)
  },
  {
    path: 'components/add-contact',
    loadChildren: () => import('./components/add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'components/edit-contact/:contactId',
    loadChildren: () => import('./components/edit-contact/edit-contact.module').then( m => m.EditContactPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
