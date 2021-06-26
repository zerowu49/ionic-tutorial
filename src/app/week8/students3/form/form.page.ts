import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student2 } from '../../student2.model';
import { Students3Service } from '../../students3.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
    private student3Srv: Students3Service,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form)

    const student: Student2 = {
      nim: form.value.nim,
      nama: form.value.nama,
      prodi: form.value.prodi,
    }

    this.student3Srv.addStudent(student)
    this.router.navigateByUrl('/students3')
  }

}
