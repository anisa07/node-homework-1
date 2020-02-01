import express from 'express';
import { GroupController } from '../controllers/groupController';

const groupRouter = express.Router();
const groupController = new GroupController();

// get group by id
groupRouter.get('/:id', (request, response) => {
    groupController.getGroupById(request, response);
});

// create group
groupRouter.post('/create', (request, response) => {
    groupController.createGroup(request, response);
});

// update group by id
groupRouter.patch('/:id', (request, response) => {
    groupController.updateGroup(request, response);
});

// get all groups
groupRouter.get('/', (request, response) => {
    groupController.getAllGroups(request, response);
});

// delete group (hard delete)
groupRouter.delete('/:id', (request, response) => {
    groupController.deleteGroup(request, response);
});

export { groupRouter };
