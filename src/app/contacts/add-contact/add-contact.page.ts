import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newContact = new Contact(
      null,
      form.value.name,
      [form.value.email1, form.value.email2],
      [form.value.telephone1, form.value.telephone2],
    )

    console.log(newContact)

    this.contactsService.addContact(newContact).then(res => {
      console.log(res)
    })

    form.reset()
  }

  addContact() {
    this.presentLoading().then(() => {
      this.router.navigateByUrl('/contacts')
      this.presentToast()
    })
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Contact has been added.",
      duration: 3000,
    })

    toast.present()
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding new contact...',
      duration: 2000,
    })

    await loading.present()

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
