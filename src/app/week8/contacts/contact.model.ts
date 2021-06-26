export class Contact {
    id: string;
    name: string;
    photo: string;
    telephone: string[];
    email: string[];

    constructor(id, name, photo, email, telephone) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.email = email;
        this.telephone = telephone;
    }
}
