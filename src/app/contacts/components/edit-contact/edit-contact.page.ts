import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Contact } from '../../contact.model';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {
  form: FormGroup
  loadedContact: Contact

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
        this.loadedContact = this.contactsService.getContact(contactId)
      }
    )

    this.form = new FormGroup({
      name: new FormControl(this.loadedContact.name, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      photoUrl: new FormControl(this.loadedContact.photo, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      telephone1: new FormControl(this.loadedContact.telephone[0], {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      telephone2: new FormControl(this.loadedContact.telephone[1], {
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
  }

  onSubmit(){
    const editContact = new Contact(
      this.loadedContact.id,
      this.form.value.name,
      this.form.value.photoUrl,
      [this.form.value.email1, this.form.value.email2],
      [this.form.value.telephone1, this.form.value.telephone2]
    );
    this.contactsService.editContact(editContact);

    this.presentLoading().then(() => {
      this.router.navigate(['/contacts']);
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Contact has been edited.',
      color: 'primary',
      duration: 3000
    });

    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Editing contact...',
      duration: 1500
    });
    await loading.present();
  }

}
