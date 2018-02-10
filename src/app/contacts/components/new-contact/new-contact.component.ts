import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { IContact } from '../../interfaces/icontact.interface';

const PHONE_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contactForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  telephone: FormControl;

  constructor(
    private service: ContactsService,
    private formBuilder: FormBuilder
  ) {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]);
    this.surname = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]);
    this.telephone = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
      Validators.pattern(PHONE_REGEX)
    ]);
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      telephone: this.telephone
    });
  }

  create() {
    const newContact: IContact = this.contactForm.value;
    this.service.create(newContact);
  }

}
