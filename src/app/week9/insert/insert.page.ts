import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  res: any = []
  data: Observable<any>
  constructor(
    private mhsSrv: MahasiswaService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value
    console.log(value)

    const mhs = {
      nim: value.nim,
      nama: value.nama,
      prodi: value.prodi,
    }

    this.mhsSrv.insertMhs(mhs).subscribe(res => {
      console.log(res)
    })

    this.router.navigateByUrl('/index')
  }

}
