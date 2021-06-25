import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { ModalAddContactComponent } from './components/modal-add-contact/modal-add-contact.component';
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
    private modalCtrl: ModalController,
    
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.contacts = this.contactsService.getAllContacts();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalAddContactComponent,
      componentProps: { selectedContact: this.loadedContact }
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });

    return await modal.present();
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
