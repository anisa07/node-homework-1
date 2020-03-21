import { GroupController } from "../../controllers/groupController";
import * as groupService from '../../services/groupService';

const groupController = new GroupController();

const groups = [{
    id: '123abc',
    name: 'groupA',
    permissions: ['READ']
}];
const group = {
    id: '123abc',
    name: 'groupA',
    permissions: ['READ']
};

describe('Group Controller Test', () => {
    it('should get a group by id', async () => {
        const response = {
            send: group => group
        };

        jest.spyOn(groupService, 'getById').mockImplementation(jest.fn(() => group));
        jest.spyOn(response, 'send');

        await groupController.getGroupById({params: {id: '123abc'}}, response);

        expect(groupService.getById).toHaveBeenCalledTimes(1);
        expect(groupService.getById).toHaveBeenCalledWith('123abc');
        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(group);
    });

    it('should create a group', async () => {
        const response = {
            send: group => group
        };

        jest.spyOn(groupService, 'create').mockImplementation(jest.fn(() => ({dataValues: group})));
        jest.spyOn(response, 'send');

        await groupController.createGroup({body: group}, response);

        expect(groupService.create).toHaveBeenCalledTimes(1);
        expect(groupService.create).toHaveBeenCalledWith(group);
        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(group);
    });

    it('should update a group', async () => {
        const response = {
            send: group => group
        };

        jest.spyOn(groupService, 'getById').mockImplementation(jest.fn(() => group));
        jest.spyOn(groupService, 'update').mockImplementation(jest.fn(() => {}));
        jest.spyOn(response, 'send');

        await groupController.updateGroup({body: {name: 'groupB'}, params: {id: '123abc'}}, response);

        expect(groupService.update).toHaveBeenCalledTimes(1);
        expect(groupService.update).toHaveBeenCalledWith('123abc', {name: 'groupB'});
        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(group);
    });

    it('should get all groups', async () => {
        const response = {
            send: data => data
        };

        jest.spyOn(groupService, 'getAll').mockImplementation(jest.fn(() => groups));
        jest.spyOn(response, 'send');

        await groupController.getAllGroups({}, response);
        expect(groupService.getAll).toHaveBeenCalledTimes(1);
        expect(groupService.getAll).toHaveBeenCalledWith();
        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(groups);
    });

    it('should get all groups', async () => {
        const response = {
            send: data => data
        };

        jest.spyOn(groupService, 'hardDelete').mockImplementation(jest.fn(() => ({id: '123abc'})));
        jest.spyOn(response, 'send');

        await groupController.deleteGroup({params: {id: '123abc'}}, response);
        expect(groupService.hardDelete).toHaveBeenCalledTimes(1);
        expect(groupService.hardDelete).toHaveBeenCalledWith('123abc');
        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith({id: '123abc'});
    });
});
