import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { IContact } from '../../interfaces/icontact.interface';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  constructor(private service: ContactsService) { }

  contacts: IContact[];

  ngOnInit() {
    this.contacts = this.service.getContacts();
    console.log(this.contacts);
  }

}
