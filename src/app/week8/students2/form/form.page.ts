import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student2 } from '../../student2.model';
import { Students2Service } from '../../students2.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
    private student2Srv: Students2Service,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value)

    const student: Student2 = {
      nim: form.value.nim,
      nama: form.value.nama,
      prodi: form.value.prodi,
    }

    this.student2Srv.addStudent(student)
    this.router.navigateByUrl('/students2')
  }

}
