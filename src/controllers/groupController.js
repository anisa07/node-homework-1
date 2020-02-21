import {getById, create, update, getAll, hardDelete} from '../services/groupService';

export class GroupController {
    async getGroupById(request, response) {
        const group = await getById(request.params.id);
        response.send(group);
    }

    async createGroup(request, response) {
        const group = await create(request.body);
        response.send(group.dataValues);
    }

    async updateGroup(request, response) {
        await update(request.params.id, request.body);
        const group = await getById(request.params.id);
        response.send(group);
    }

    async getAllGroups(request, response) {
        const groups = await getAll();
        response.send(groups);
    }

    async deleteGroup(request, response) {
        await hardDelete(request.params.id);
        response.send({id: request.params.id});
    }
}
