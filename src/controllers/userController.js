import { getById, create, update, getAll, softDelete } from "../services/userService";

export class UserController {
    getUserById(id) {
        return getById(id);
    };

    createUser(userData) {
        return create(userData);
    };

    updateUser(id, userData) {
        return update(id, userData);
    };

    getAutoSuggestUsers(loginSubstring, limit) {
        if (!!limit) {
            return getAll()
                .filter(user => user.login.includes(loginSubstring))
                .sort((userA, userB) => userA.login.localeCompare(userB.login))
                .slice(0, limit);
        }
        return [];
    };

    deleteUser(id) {
        return softDelete(id);
    }
};
