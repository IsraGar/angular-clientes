export class Customer{
    constructor(id: number, name: string , lastname: string, createdAt: string, email: string){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.createdAt = createdAt;
        this.email = email;
    }

    id: number;
    name: string;
    lastname: string;
    createdAt: string;
    email: string;
}