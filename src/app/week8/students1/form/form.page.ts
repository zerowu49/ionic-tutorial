import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student1 } from '../../student1.model';
import { Students1Service } from '../../students1.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
    private student1Srv: Students1Service,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form)

    const student: Student1 = {
      nim: form.value.nim,
      nama: form.value.nama,
      prodi: form.value.prodi,
    }

    this.student1Srv.addStudent(student)
    this.router.navigateByUrl('/students1')
  }

}
