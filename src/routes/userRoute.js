import express from 'express';
import { UserController } from '../controllers/userController';

const userRouter = express.Router();
const userController = new UserController();

// get user by id
userRouter.get('/:id', (request, response) => {
    userController.getUserById(request, response);
});

// create user
userRouter.post('/create', (request, response) => {
    userController.createUser(request, response);
});

// update user
userRouter.patch('/:id', (request, response) => {
    userController.updateUser(request, response);
});

// get auto-suggest user from limit users. sorted by login property and filtered by login substring
userRouter.get('/', (request, response) => {
    userController.getAutoSuggestUsers(request, response);
});

// remove user (soft remove, set isDeleted = true)
userRouter.delete('/:id', (request, response) => {
    userController.deleteUser(request, response);
});

export { userRouter };