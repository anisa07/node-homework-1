import express from 'express';
import bunyan from 'bunyan';
import { UserGroupController } from '../controllers/userGroupController';

const log = bunyan.createLogger({
    name: 'tough-app-user-group-route',
});

const userGroupRouter = express.Router();
const userGroupController = new UserGroupController();

// get all user-groups
userGroupRouter.get('/', (request, response) => {
    userGroupController
        .getAllUserGroups(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// create a user-group
userGroupRouter.post('/', (request, response) => {
    userGroupController
        .createUserGroups(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

export { userGroupRouter };
