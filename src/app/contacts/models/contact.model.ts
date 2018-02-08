import { IContact } from '../interfaces/icontact.interface';

export class Contact implements IContact {
    public name: String;
    public surname: String;
    public telephone: Number;

    public constructor(contact: IContact) {
        this.name = contact.name;
        this.surname = contact.surname;
        this.telephone = contact.telephone;
    }
}
