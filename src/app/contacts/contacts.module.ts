/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
/* Components */
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
/* Services */
import { ContactsService } from './services/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsListComponent,
    ContactCardComponent
  ],
  providers: [ContactsService]
})
export class ContactsModule { }
