import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: any;
  private contactSub: Subscription

  constructor(
    private contactsService: ContactsService,
    private navCtrl: NavController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.contactsService.getAllContacts().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(contact => {
        console.log(contact)
        this.contacts = contact
      })
  }

  delete(key) {
    console.log(key);
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.contactsService.deleteContact(key).then(res => {
          console.log(res);
        });
      } else {
        this.navCtrl.navigateBack('auth/login');
      }
    }, err => {
      console.log('err', err);
    });
    
  }


  fav(contact: Contact, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(contact.nama, 'is set as priority contact');
  }

  onFilterUpdate(event: Event) {
    let eventDetail = (event as CustomEvent).detail
    console.log(eventDetail);
    if (eventDetail.value === 'all') {
      console.log('Showing all contacts.');
    } else {
      console.log('Showing priority contacts.');
    }
  }
}
