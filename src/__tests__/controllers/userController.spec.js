import { UserController } from "../../controllers/userController";
import * as userService from '../../services/userService';

const userController = new UserController();

const users = [{id: 'abc1', login: 'login', password: 'password123', age: 18, isDeleted: false}];
const user = { login: 'login2', password: 'password1234', age: 19, isDeleted: true};

describe('User Controller Test', () => {
    it('should get all users', async () => {
        const response = {
            send: users => users
        };

        jest.spyOn(userService, 'getAll').mockImplementation(jest.fn(() => users));
        jest.spyOn(response, 'send');

        await userController.getAllUsers({}, response);

        expect(userService.getAll).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledTimes(1);
    });

    it('should get a user by id', async () => {
        jest.spyOn(userService, 'getById').mockImplementation(jest.fn(() => users[0]));

        await userController.getUserById({params: {id: 'abc1'}}, {send: () => users[0]});

        expect(userService.getById).toHaveBeenCalledTimes(1);
        expect(userService.getById).toHaveBeenCalledWith('abc1');
    });

    it('should should create a user', async () => {
        jest.spyOn(userService, 'create').mockImplementation(jest.fn(() => ({dataValues: user})));

        await  userController.createUser({body: user}, { send: () => user });

        expect(userService.create).toHaveBeenCalledTimes(1);
        expect(userService.create).toHaveBeenCalledWith(user);
    });

    it('should should update a user', async () => {
        jest.spyOn(userService, 'update').mockImplementation(jest.fn(() => {}));

        await userController.updateUser({body: user, params: {id: 'abc1'}}, { send: () => user });

        expect(userService.update).toHaveBeenCalledTimes(1);
        expect(userService.update).toHaveBeenCalledWith( "abc1", user);
    });

    it('should should get auto suggested users', async () => {
        const response = {
            send: (data) => data
        };
        jest.spyOn(userService, 'getAll').mockImplementation(jest.fn(() => ([{
            dataValues: users[0]
        }])));
        jest.spyOn(response, 'send');

        await  userController.getAutoSuggestUsers({query: {limit: 1, loginSubstring: 'lo'}}, response);

        expect(userService.getAll).toHaveBeenCalledTimes(2);
        expect(response.send).toHaveBeenCalledWith(users);
    });

    it('should should soft delete user', async () => {
        const response = {
            send: (data) => data
        };
        jest.spyOn(userService, 'softDelete').mockImplementation(jest.fn(() => {}));
        jest.spyOn(userService, 'getById').mockImplementation(jest.fn(() => users[0]));
        jest.spyOn(response, 'send');

        await  userController.deleteUser({params: {id: 'abc2'}}, response);

        expect(userService.getById).toHaveBeenCalledTimes(3);
        expect(userService.softDelete).toHaveBeenCalledTimes(1);
        expect(userService.getById).toHaveBeenCalledWith('abc2');
        expect(response.send).toHaveBeenCalledWith(users[0]);
    });
});
