import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 'c1',
      name: 'John Thor',
      photo: 'https://wfpquantum.s3.amazonaws.com/images/passages/obits/large/a2ju9fo5hmftpokt0hzq-125437.jpg',
      telephone: ['081122334455', '081234567890'],
      email: ['john.thor@umn.ac.id','hello@johnthor.com'],
    },
    {
      id: 'c2',
      name: 'John Wick',
      photo: 'https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg',
      telephone: ['087812312300', '081512131415'],
      email: ['john.wick@umn.ac.id','johnwick@gmail.com'],
    },
  ]
  constructor() { }

  getAllContacts(){
    return [...this.contacts]
  }

  getContact(contactId: string) {
    return {...this.contacts.find(contact => {
      return contact.id === contactId;
    })};
  }

  deleteContact(contactId: string){
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactId
    })
  }
}
