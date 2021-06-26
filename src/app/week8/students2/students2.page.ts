import { Component, OnInit } from '@angular/core';
import { Student2 } from '../student2.model';
import { Students2Service } from '../students2.service';

@Component({
  selector: 'app-students2',
  templateUrl: './students2.page.html',
  styleUrls: ['./students2.page.scss'],
})
export class Students2Page implements OnInit {
  students: Student2[]
  constructor(
    private student2Srv: Students2Service
  ) { }

  ngOnInit() {
    this.students = this.student2Srv.getAllStudents()
    console.log(this.students)
  }
  
  ionViewWillEnter(){
  }
}
