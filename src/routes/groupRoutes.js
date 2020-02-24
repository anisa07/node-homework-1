import express from 'express';
import { GroupController } from '../controllers/groupController';
import { logPromiseError } from './errorLog';

const groupRouter = express.Router();
const groupController = new GroupController();

// get group by id
groupRouter.get('/:id', (request, response) => {
    groupController
        .getGroupById(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// create group
groupRouter.post('/create', (request, response) => {
    groupController
        .createGroup(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// update group by id
groupRouter.patch('/:id', (request, response) => {
    groupController
        .updateGroup(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// get all groups
groupRouter.get('/', (request, response) => {
    groupController
        .getAllGroups(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

// delete group (hard delete)
groupRouter.delete('/:id', (request, response) => {
    groupController
        .deleteGroup(request, response)
        .catch(e => {
            logPromiseError(request);
        });
});

export { groupRouter };
