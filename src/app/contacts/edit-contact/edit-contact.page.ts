import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {
  loadedContact: any
  key: string

  @ViewChild('f', {}) f: NgForm

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('contactId')) {
          return
        }
        const key = paramMap.get('contactId');
        this.key = key;

        this.db.object('/contact/' + key).valueChanges()
          .subscribe(contact => {
            console.log(contact)
            this.loadedContact = contact
            console.log('this.loadedContact: ', this.loadedContact);

          })
      }
    )

    setTimeout(() => {
      this.f.setValue({
        name: this.loadedContact.nama,
        email1: this.loadedContact.email[0],
        email2: this.loadedContact.email[1],
        telephone1: this.loadedContact.phone[0],
        telephone2: this.loadedContact.phone[1]
      });
    })

  }


  onSubmit(form: NgForm) {
    const editContact = new Contact(
      null,
      form.value.name,
      [form.value.email1, form.value.email2],
      [form.value.telephone1, form.value.telephone2],
    );
    this.contactsService.editContact(this.key, editContact).then(res => {
      console.log(res)
      this.presentLoading().then(() => {
        this.router.navigateByUrl('/contacts/index')
        this.presentToast();
      });
    })


  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Contact updated.',
      color: 'primary',
      duration: 5000
    });

    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Updating contact...',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
