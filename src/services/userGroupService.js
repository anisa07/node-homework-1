import uuidv4 from 'uuid/v4';
import {UserGroupModel} from '../models/initModels';

export const getAll = async () => UserGroupModel.findAll() || [];

export const create = async ({ userId, groupId }) => {
    return UserGroupModel.create({
        userId,
        groupId
    })
};
