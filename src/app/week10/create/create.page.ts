import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(
    private router: Router,
    private mhsSrv: MahasiswaService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.mhsSrv.create(form.value).then(res => {
      console.log(res)
      this.router.navigateByUrl('/index')
    }).catch(error => console.log(error))
    form.reset()
    this.router.navigateByUrl('/index')
  }

}
