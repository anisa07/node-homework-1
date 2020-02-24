import express from 'express';
import { logPromiseError } from './errorLog';
import { UserController } from '../controllers/userController';

const userRouter = express.Router();
const userController = new UserController();

// get all users
userRouter.get('/', (request, response) => {
    userController
        .getAllUsers(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// get user by id
userRouter.get('/:id', (request, response) => {
    userController
        .getUserById(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// create user
userRouter.post('/create', (request, response) => {
    userController
        .createUser(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// update user
userRouter.patch('/:id', (request, response) => {
    userController
        .updateUser(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// get auto-suggest user from limit users. sorted by login property and filtered by login substring
userRouter.get('/', (request, response) => {
    userController
        .getAutoSuggestUsers(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// remove user (soft remove, set isDeleted = true)
userRouter.delete('/:id', (request, response) => {
    userController
        .deleteUser(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

export { userRouter };
