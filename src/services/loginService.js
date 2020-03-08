import uuidv4 from 'uuid/v4';
import { LoginModel } from '../models/initModels';
import { loginValidationSchema } from '../validation/loginValidation';

export const getByLogin = async ({ login }) => LoginModel.findOne({
    where: {
        login
    },
});

export const getByLoginAndPassword = async ({ login, password }) => LoginModel.findOne({
    where: {
        login, password
    },
});

export const authorize = async ({ login, password }) => {
    const validation = loginValidationSchema.validate({ login, password });
    if (!validation.error) {
        return LoginModel.create({
            id: uuidv4(),
            login,
            password
        });
    }
};
