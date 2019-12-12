import express from 'express';
import { UserController } from '../controllers/userController';

const userRouter = express.Router();
const userController = new UserController();

// get user by id
userRouter.get('/:id', (request, response) => {
    response.send(userController.getUserById(request.params.id));
});

// create user
userRouter.post('/create', (request, response) => {
    response.send(userController.createUser(request.body));
});

// update user
userRouter.patch('/:id', (request, response) => {
    response.send(userController.updateUser(request.params.id, request.body));
});

// get auto-suggest user from limit users. sorted by login property and filtered by login substring
userRouter.get('/', (request, response) => {
    const { limit, loginSubstring } = request.query;
    response.send(userController.getAutoSuggestUsers(loginSubstring || '', Number.parseInt(limit, 10) || 0));
});

// remove user (soft remove, set isDeleted = true)
userRouter.delete('/:id', (request, response) => {
    response.send(userController.deleteUser(request.params.id));
});

export { userRouter };
