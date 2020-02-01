import express from 'express';
import { UserGroupController } from '../controllers/userGroupController';

const userGroupRouter = express.Router();
const userGroupController = new UserGroupController();

// get all user-groups
userGroupRouter.get('/', (request, response) => {
    userGroupController.getAllUserGroups(request, response);
});

// create a user-group
userGroupRouter.post('/', (request, response) => {
    userGroupController.createUserGroups(request, response);
});

export { userGroupRouter };
