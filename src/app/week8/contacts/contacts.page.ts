import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];
  loadedContact: Contact;


  constructor(
    private contactsService: ContactsService,
    private router: Router,
    
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.contacts = this.contactsService.getAllContacts();
  }

  fav(contact: Contact, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(contact.name, 'is set as priority contact');
  }

  onFilterUpdate(event: Event) {
    let eventDetail = (event as CustomEvent).detail
    console.log(eventDetail);
    if (eventDetail.value === 'all') {
      console.log('Showing all contacts.');
    }else {
      console.log('Showing priority contacts.');
    }
  }
}
