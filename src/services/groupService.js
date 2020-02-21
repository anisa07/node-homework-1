import uuidv4 from 'uuid/v4';
import { GroupModel } from '../models/initModels';
import { groupValidationSchema } from '../validation/groupValidation';

export const getAll = async () => GroupModel.findAll() || [];

export const getById = async (id) => GroupModel.findOne({
    where: {
        id: id,
    },
});

export const create = async ({ name, permissions }) => {
    const validation = groupValidationSchema.validate({ name, permissions });
    if (!validation.error) {
        return GroupModel.create({
            id: uuidv4(),
            name,
            permissions: permissions.join(', ')
        });
    }
};

export const update = async (id, data) => {
    const validation = groupValidationSchema.validate(data);
    if (!validation.error) {
        return GroupModel.update({
            name: data.name,
            permissions: data.permissions.join(', ')
        }, {
            where: {id: id},
            returning: true,
        })
    }
};

export const hardDelete = async (id) => GroupModel.destroy( {
    where: {id: id},
    returning: true,
});
