import { Component, Input } from '@angular/core';
import { IContact } from '../../interfaces/icontact.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input() contact: IContact;

  constructor() { }

  getNameFirstChar(name: string) {
    return name.charAt(0);
  }

}
