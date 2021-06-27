import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit, OnDestroy {
  loadedContact: any
  private loadedContactSub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
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
            // this.loadedContact = contact
            this.loadedContact = new Contact(contact[0].id, contact[0].nama, [...contact[0].email.split(',')], [...contact[0].phone.split(',')]);
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
    console.log(`id: ${this.loadedContact.id}`)
    this.contactsService.deleteContact(this.loadedContact.id).subscribe(res => {
      console.log(res)
    })

    this.presentLoading().then(() => {
      this.router.navigate(['/contacts'])
      this.presentToast();
    })
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting contact...',
      duration: 2000
    });

    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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
