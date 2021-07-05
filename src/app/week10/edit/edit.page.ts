import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MahasiswaService } from '../mahasiswa.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  mahasiswa: any;
  key: string;

  @ViewChild('f', {}) f: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mhsSrv: MahasiswaService,
    private db: AngularFireDatabase,
    private router: Router
  ) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('key')) { return; }
      const key = paramMap.get('key');
      this.key = key;

      this.db.object('/mahasiswa/' + key).valueChanges().subscribe(data => {
        console.log('data:', data);
        this.mahasiswa = data;
        console.log('this.mahasiswa: ', this.mahasiswa);
      });
    });

    // Set Form Value
    setTimeout(() => {
      this.f.setValue(this.mahasiswa);
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.mhsSrv.update(this.key, form.value).then(res => {
      console.log(res);
      this.router.navigateByUrl('/index');
    }).catch(error => console.log(error));

    form.reset();
    this.router.navigateByUrl('/index');
  }
}
