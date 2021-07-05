export class Contact {
    id: string;
    nama: string;
    phone: string[];
    email: string[];
    lokasi: Geolocation;

    constructor(id, nama, email, phone, lokasi) {
        this.id = id;
        this.nama = nama;
        this.email = email;
        this.phone = phone;
        this.lokasi = lokasi;
    }
}
