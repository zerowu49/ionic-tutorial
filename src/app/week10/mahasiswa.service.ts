import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mahasiswa } from './mahasiswa.model';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  private dbPath = '/mahasiswa'
  mahasiswaRef: AngularFireList<Mahasiswa> = null

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.mahasiswaRef = db.list(this.dbPath)
  }

  getAll(): AngularFireList<Mahasiswa> {
    return this.mahasiswaRef
  }

  create(mahasiswa: Mahasiswa): any {
    return this.mahasiswaRef.push(mahasiswa)
  }

  update(key: string, value: any): Promise<void> {
    return this.mahasiswaRef.update(key,value)
  }

  delete(key: string): Promise<void> {
    return this.mahasiswaRef.remove(key)
  }

  deleteAll(): Promise<void> {
    return this.mahasiswaRef.remove()
  }

}
