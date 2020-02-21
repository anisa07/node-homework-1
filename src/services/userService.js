import uuidv4 from 'uuid/v4';
import { UserModel } from '../models/initModels';
import { userValidationSchema } from '../validation/userValidation';

export const getAll = async () => UserModel.findAll() || [];

export const getById = async (id) => UserModel.findOne({
    where: {
        id: id,
    },
});

export const create = async ({ login, password, age, isDeleted }) => {
    const validation = userValidationSchema.validate({ login, password, age, isDeleted });
    if (!validation.error) {
        return UserModel.create({
            id: uuidv4(),
            login,
            password,
            age,
            isDeleted
        });
    }
};

export const update = async (id, data) => UserModel.update({
        ...data
    }, {
        where: {id: id},
        returning: true,
    });

export const softDelete = async (id) => UserModel.update({
        isDeleted: true
    }, {
        where: {id: id},
        returning: true,
    });
