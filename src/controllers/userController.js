import {getById, create, update, getAll, softDelete} from '../services/userService';

export class UserController {
    async getAllUsers(request, response) {
        const groups = await getAll();
        response.send(groups);
    }

    async getUserById(request, response) {
        const user = await getById(request.params.id);
        response.send(user);
    }

    async createUser(request, response) {
        const user = await create(request.body);
        response.send(user.dataValues);
    }

    async updateUser(request, response) {
        await update(request.params.id, request.body);
        const user = await getById(request.params.id);
        response.send(user);
    }

    async getAutoSuggestUsers(request, response) {
        const {limit, loginSubstring} = request.query;
        const users = ( await getAll() || []).map(user => user.dataValues);
        const autoSuggestedUsers = !!limit
            ? users
                .filter(user => user.login.includes(loginSubstring))
                .sort((userA, userB) => userA.login.localeCompare(userB.login))
                .slice(0, limit)
            : [];

        response.send(autoSuggestedUsers);
    }

    async deleteUser(request, response) {
        await softDelete(request.params.id);
        const user = await getById(request.params.id);
        response.send(user);
    }
}
