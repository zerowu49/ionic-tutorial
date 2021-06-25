import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Contact } from 'src/app/contacts/contact.model';

@Component({
  selector: 'app-modal-add-contact',
  templateUrl: './modal-add-contact.component.html',
  styleUrls: ['./modal-add-contact.component.scss'],
})
export class ModalAddContactComponent implements OnInit {
  @Input() selectedContact: Contact

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel')
  }

  addContact(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'New contact added'}, 'confirm')
      this.presentToast()
    })
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding contact...',
      duration: 2000
    });
    await loading.present()

    const { role, data } = await loading.onDidDismiss()
    console.log('Loading dismissed!')
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'New contact added.',
      duration: 2000,
      color: 'green'
    })
    await toast.present()
  }


}
