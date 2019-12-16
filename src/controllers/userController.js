import { getById, create, update, getAll, softDelete } from '../services/userService';

export class UserController {
    getUserById(request, response) {
        response.send(getById(request.params.id));
    }

    createUser(request, response) {
        try {
            response.send(create(request.body));
        } catch (e) {
            response.status(400).send(e);
        }
    }

    updateUser(request, response) {
        try {
            response.send(update(request.params.id, request.body));
        } catch (e) {
            console.log(e);
            response.status(400).send(e);
        }
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
