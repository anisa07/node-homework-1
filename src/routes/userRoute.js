import express from 'express';
import bunyan from 'bunyan';
import { UserController } from '../controllers/userController';

const log = bunyan.createLogger({
    name: 'tough-app-user-route',
});

const userRouter = express.Router();
const userController = new UserController();

// get all users
userRouter.get('/', (request, response) => {
    userController
        .getAllUsers(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// get user by id
userRouter.get('/:id', (request, response) => {
    userController
        .getUserById(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// create user
userRouter.post('/create', (request, response) => {
    userController
        .createUser(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// update user
userRouter.patch('/:id', (request, response) => {
    userController
        .updateUser(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// get auto-suggest user from limit users. sorted by login property and filtered by login substring
userRouter.get('/', (request, response) => {
    userController
        .getAutoSuggestUsers(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// remove user (soft remove, set isDeleted = true)
userRouter.delete('/:id', (request, response) => {
    userController
        .deleteUser(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

export { userRouter };
