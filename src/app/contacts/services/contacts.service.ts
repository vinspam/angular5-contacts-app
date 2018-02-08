import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/icontact.interface';
import { contactsData } from './data';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class ContactsService {

  public contacts: IContact[];

  constructor() {
    this.contacts = contactsData;
  }

  public getContacts(): IContact[] {
    return this.contacts;
  }

  public create(contact: IContact) {
    this.contacts.push(contact);
  }

  public delete(contact: IContact) {
    _.remove(this.contacts, contact);
  }

}
