import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student2 } from './student2.model';
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Students3Service {
  private students = new BehaviorSubject<Student2[]> ([
    new Student2(
      '001',
      'John Thor',
      'Informatika'
    ),
    new Student2(
      '002',
      'John Wick',
      'Sistem Informasi'
    ),
  ])

  constructor() { }

  getAllStudents(){
    return this.students.asObservable()
  }

  getStudent(nim: string){
    return this.students.pipe(
      take(1),
      map(students => {
        return {...students.find(s => s.nim === nim)}
      })
    )
  }

  addStudent(student: Student2){
    this.getAllStudents().pipe(take(1))
      .subscribe(students => {
        this.students.next(students.concat(student))
      })
  }
}
