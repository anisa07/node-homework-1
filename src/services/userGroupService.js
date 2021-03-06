import {UserGroupModel} from '../models/initModels';

export const getAll = async () => UserGroupModel.findAll() || [];

export const create = async ({ userId, groupId }) => {
    return UserGroupModel.sequelize.transaction((t) => {
        return UserGroupModel.create({
            userId,
            groupId
        }, {transaction: t});
    });
};
