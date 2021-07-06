import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['contacts/index']);

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
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'contacts/edit-contact/:contactId',
    loadChildren: () => import('./contacts/edit-contact/edit-contact.module').then(m => m.EditContactPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToItems)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'auth/dashboard',
    loadChildren: () => import('./auth/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
