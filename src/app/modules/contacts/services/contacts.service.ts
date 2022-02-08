import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [];

  constructor() {}

  getContacts() {
    return this.contacts;
  }
}
