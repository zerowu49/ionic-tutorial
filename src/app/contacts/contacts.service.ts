import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllContacts(){
    return this.http.get('http://localhost/kontak/select.php')
  }

  getContact(contactId: string) {
    return this.http.get('http://localhost/kontak/select.php?id='+contactId)
  }

  addContact(newContact: Contact) {
    const data = JSON.stringify(newContact)
    return this.http.post<any>('http://localhost/kontak/insert.php', data)
  }

  editContact(editContact: Contact) {
    const data = JSON.stringify(editContact);
    return this.http.post<any>('http://localhost/kontak/update.php', data);
  }

  deleteContact(contactId: string){
    const data = JSON.stringify({ id: contactId })
    return this.http.post<any>('http://localhost/kontak/delete.php', data)
  }
}
