export class Contact {
    id: string;
    name: string;
    telephone: string[];
    email: string[];

    constructor(id, name, email, telephone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.telephone = telephone;
    }
}
