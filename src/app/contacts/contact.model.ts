export class Contact {
    id: string;
    nama: string;
    phone: string[];
    email: string[];
    lokasi: Geolocation;
    photo: string;

    constructor(id, nama, email, phone, lokasi,photo) {
        this.id = id;
        this.nama = nama;
        this.email = email;
        this.phone = phone;
        this.lokasi = lokasi;
        this.photo = photo;
    }
}
