import { Injectable } from '@angular/core';
import { Student1 } from './student1.model';

@Injectable({
  providedIn: 'root'
})
export class Students1Service {
  private students: Student1[] = [
    {
      nim: '001',
      nama: 'John Thor',
      prodi: 'Informatika',
    },
    {
      nim: '002',
      nama: 'John Wick',
      prodi: 'Sistem Informasi',
    },
  ]
  constructor() { }

  getAllStudents(){
    return [...this.students]
  }

  getStudent(nim: string){

  }

  addStudent(student: Student1){
    const x = this.students.push(student)
    console.log(x)
  }
}
