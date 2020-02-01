import {getAll, create} from '../services/userGroupService';

export class UserGroupController {
    async getAllUserGroups(request, response) {
        const groups = await getAll();
        response.send(groups);
    }

    async createUserGroups(request, response) {
        const group = await create(request.body);
        response.send(group);
    }
}
