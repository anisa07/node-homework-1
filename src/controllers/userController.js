import { getById, create, update, getAll, softDelete } from '../services/userService';

export class UserController {
    getUserById(request, response) {
        response.send(getById(request.params.id));
    }

    createUser(request, response) {
        response.send(create(request.body));
    }

    updateUser(request, response) {
        response.send(update(request.params.id, request.body));
    }

    getAutoSuggestUsers(request, response) {
        const { limit, loginSubstring } = request.query;
        const autoSuggestedUsers = !!limit
            ? getAll()
                .filter(user => user.login.includes(loginSubstring))
                .sort((userA, userB) => userA.login.localeCompare(userB.login))
                .slice(0, limit)
            : [];

        response.send(autoSuggestedUsers);
    }

    deleteUser(request, response) {
        response.send(softDelete(request.params.id));
    }
}
