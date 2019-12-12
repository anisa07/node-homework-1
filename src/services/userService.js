import { User } from '../models/User';

let users = [new User('test', '123456', '21', false, '1'),
    new User('tek', '123456', '21', false, '2'),
    new User('tea', '123456', '21', false, '3')];

export const getAll = () => users;

export const getById = (id) => users.find(user => user.id === id);

export const create = ({login, password, age, isDeleted}) => {
    users.push(new User(login, password, age,  isDeleted));

    return users.slice(-1);
};

export const update = (id, data) => {
    let updatedUser = {};

    users = users.map(user => {
        if (id === user.id) {
            user = {...user, ...data};
            updatedUser = {user};
        }
        return user;
    });

    return updatedUser;
};

export const softDelete = (id) => {
    let deletedUser = {};

    users = users.map(user => {
        if (id === user.id) {
            user.isDeleted = true;
            deletedUser = user;
        }
        return user;
    });

    return deletedUser;
};
