import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents() {
    return this.http.get('http://localhost/select.php')
  }

  insertMhs(newMhs: any) {
    const mhs = {
      nim: newMhs.nim,
      nama: newMhs.nama,
      prodi: newMhs.prodi,
    }

    const data = JSON.stringify(mhs)
    return this.http.post<any>('http://localhost/insert.php', data)
  }

  deleteMhs(nim: string) {
    const data = JSON.stringify({ id: nim })
    return this.http.post<any>('http://localhost/delete.php', data)
  }
}
