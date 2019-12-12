import uuidv4 from 'uuid/v4';

export class User {
    constructor (login, password, age, isDeleted, id = uuidv4()) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.age = age;
        this.isDeleted = isDeleted;
    }
}
