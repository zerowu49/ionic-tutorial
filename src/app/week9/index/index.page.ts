import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  students: any
  isObservableTimer = false
  obsTimer: Observable<number> = timer(1000, 1800);

  constructor(
    private mhsSrv: MahasiswaService,
  ) { }

  ngOnInit() {
    if (this.isObservableTimer) {
      this.obsTimer.subscribe(curTime => {
        console.log(curTime)
        this.mhsSrv.getAllStudents().subscribe(students => {
          this.students = students
          console.log(students)
        })
      })
    } else {
      this.mhsSrv.getAllStudents().subscribe(students => {
        this.students = students
        console.log(students)
      })
    }
  }

  delete(event, nim) {
    this.mhsSrv.deleteMhs(nim).subscribe()
    if (!this.isObservableTimer) {
      this.mhsSrv.getAllStudents().subscribe(students => {
        this.students = students
        console.log(students)
      })
    }
  }

}
