export class Contact {
    id: string;
    nama: string;
    phone: string[];
    email: string[];

    constructor(id, nama, email, phone) {
        this.id = id;
        this.nama = nama;
        this.email = email;
        this.phone = phone;
    }
}
