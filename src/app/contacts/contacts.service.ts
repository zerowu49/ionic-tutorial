import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private dbPath = '/contact'
  contactRef: AngularFireList<Contact> = null
  constructor(
    private db: AngularFireDatabase,
  ) {
    this.contactRef = db.list(this.dbPath)
  }

  getAllContacts(): AngularFireList<Contact> {
    return this.contactRef
  }

  // getContact(contactId: string) {
  //   return this.http.get('http://localhost/kontak/select.php?id=' + contactId)
  // }

  addContact(newContact: Contact): any {
    return this.contactRef.push(newContact)
  }

  editContact(key: string, editContact: Contact): Promise<void> {
    return this.contactRef.update(key, editContact)
  }

  deleteContact(key: string): Promise<void> {
    return this.contactRef.remove(key)
  }

}
