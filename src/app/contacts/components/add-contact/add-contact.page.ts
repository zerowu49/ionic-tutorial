import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm){
    console.log("onSubmit")
    console.log(form)
    if(!form.valid){
      return
    }

    const id = form.value.id
    const name = form.value.name
    const photo = form.value.photo
    const telephone1 = form.value.telephone1
    const telephone2 = form.value.telephone2
    const email1 = form.value.email1
    const email2 = form.value.email2

    this.contactsService.addContact(id, name, photo, [telephone1, telephone2], [email1, email2])
    this.router.navigateByUrl('/contacts')
  }

}
