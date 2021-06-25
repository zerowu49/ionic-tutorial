import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  form: FormGroup
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      imageUrl: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      ingredients: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    })
  }

  onSubmit(){
    console.log(this.form)
  }

}
