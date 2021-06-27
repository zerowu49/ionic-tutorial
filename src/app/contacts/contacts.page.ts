import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit, OnDestroy {
  contacts: Contact[];
  loadedContact: Contact;
  private contactSub: Subscription


  constructor(
    private contactsService: ContactsService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.contactSub = this.contactsService.getAllContacts()
      .subscribe(contact => {
        this.contacts = contact
      })
  }

  ngOnDestroy(){
    if(this.contactSub){
      this.contactSub.unsubscribe()
    }
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
