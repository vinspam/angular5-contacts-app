/* Modules */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Components */
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'create', component: NewContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
