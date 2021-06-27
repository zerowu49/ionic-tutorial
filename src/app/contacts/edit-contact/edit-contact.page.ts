import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit, OnDestroy {
  form: FormGroup
  loadedContact: Contact
  private loadedContactSub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
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
            this.loadedContact = new Contact(contact[0].id, contact[0].nama, [...contact[0].email.split(',')], [...contact[0].phone.split(',')]);
            this.form = new FormGroup({
              name: new FormControl(this.loadedContact.nama, {
                updateOn: 'change',
                validators: [Validators.required]
              }),
              telephone1: new FormControl(this.loadedContact.phone[0], {
                updateOn: 'change',
                validators: [Validators.required]
              }),
              telephone2: new FormControl(this.loadedContact.phone[1], {
                updateOn: 'change',
                validators: [Validators.required]
              }),
              email1: new FormControl(this.loadedContact.email[0], {
                updateOn: 'change',
                validators: [Validators.required]
              }),
              email2: new FormControl(this.loadedContact.email[1], {
                updateOn: 'change',
                validators: [Validators.required]
              })
            })
          })
      }
    )

  }

  
  ngOnDestroy() {
    if (this.loadedContactSub) {
      this.loadedContactSub.unsubscribe();
    }
  }

  onSubmit(){
    const editContact = new Contact(
      this.loadedContact.id,
      this.form.value.name,
      [this.form.value.email1, this.form.value.email2],
      [this.form.value.telephone1, this.form.value.telephone2],
    );
    this.contactsService.editContact(editContact).subscribe(res => {
      console.log(res)
    })

    this.presentLoading().then(() => {
      this.router.navigate(['/contacts']);
      this.presentToast();
    });
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
