/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
/* Components */
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent]
})
export class ContactsModule { }
