import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts = new BehaviorSubject<Contact[]> ([
    new Contact(
      'c1',
      'John Thor',
      ['081122334455', '081234567890'],
      ['john.thor@umn.ac.id','hello@johnthor.com'],
    ),
    new Contact(
      'c2',
      'John Wick',
      ['087812312300', '081512131415'],
      ['john.wick@umn.ac.id','johnwick@gmail.com'],
    ),
  ])
  constructor() { }

  getAllContacts(){
    return this.contacts.asObservable()
  }

  getContact(contactId: string) {
    return this.contacts.pipe(
      take(1),
      map(contact => {
        return {...contact.find(c => c.id === contactId)}
      })
    )
  }

  addContact(newContact: Contact) {
    this.getAllContacts().pipe(take(1))
      .subscribe(contact => {
        this.contacts.next(contact.concat(newContact))
      })
    console.log(newContact.id + " has been added.")
  }

  editContact(editContact: Contact) {
    this.getAllContacts().pipe(take(1))
      .subscribe(contact => {
        contact.forEach((contact) => {
          if (contact.id === editContact.id) {
            contact.name = editContact.name;
            contact.email = editContact.email;
            contact.telephone = editContact.telephone;
          }
        });
      })
    
  }

  deleteContact(contactId: string){
    this.getAllContacts().pipe(take(1))
      .subscribe(contact => {
        contact = contact.filter(contact => {
          return contact.id !== contactId
        })

        this.contacts.next(contact);
      })
    
  }
}
