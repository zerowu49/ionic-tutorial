import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit, OnDestroy {
  loadedContact: Contact
  private loadedContactSub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('contactId')){
          return
        }
        const contactId = paramMap.get('contactId')
        this.loadedContactSub = this.contactsService.getContact(contactId)
          .subscribe(contact => {
            this.loadedContact = contact
          })
      }
    )
  }

  ngOnDestroy(){
    if(this.loadedContactSub){
      this.loadedContactSub.unsubscribe()
    }
  }

  deleteContact(){
    this.contactsService.deleteContact(this.loadedContact.id)
    this.router.navigate(['/contacts'])
    this.presentToast();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Kontak',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Hapus',
          handler: () => this.deleteContact()
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Kontak dihapus.',
      duration: 3000,
      color: 'warning'
    });
    await toast.present();
  }


}
