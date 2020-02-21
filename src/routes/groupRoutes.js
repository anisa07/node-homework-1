import express from 'express';
import bunyan from 'bunyan';
import { GroupController } from '../controllers/groupController';

const log = bunyan.createLogger({
    name: 'tough-app-group-route',
});

const groupRouter = express.Router();
const groupController = new GroupController();

// get group by id
groupRouter.get('/:id', (request, response) => {
    groupController
        .getGroupById(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// create group
groupRouter.post('/create', (request, response) => {
    groupController
        .createGroup(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// update group by id
groupRouter.patch('/:id', (request, response) => {
    groupController
        .updateGroup(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// get all groups
groupRouter.get('/', (request, response) => {
    groupController
        .getAllGroups(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

// delete group (hard delete)
groupRouter.delete('/:id', (request, response) => {
    groupController
        .deleteGroup(request, response)
        .catch(e => {
            log.error('Error! ', e.message);
        });
});

export { groupRouter };
