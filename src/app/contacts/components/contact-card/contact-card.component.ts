import { Component, Input } from '@angular/core';
import { IContact } from '../../interfaces/icontact.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input() contact: IContact;

  constructor(private service: ContactsService) { }

  getNameFirstChar(name: string) {
    return name.charAt(0);
  }

  delete() {
    this.service.delete(this.contact);
  }

}
