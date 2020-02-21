import Sequelize from 'sequelize';
import { UserModel } from "./UserModel";
import { GroupModel } from "./GroupModel";

class UserGroupModel extends Sequelize.Model {
}

function initUserGroupModel(sequelize) {
    UserGroupModel.init({
        userId: {
            type: Sequelize.STRING,
        },
        groupId: {
            type: Sequelize.STRING,
        },
    }, {modelName: 'user-group', sequelize});
    UserModel.belongsToMany(GroupModel, {through: UserGroupModel});
    GroupModel.belongsToMany(UserModel, {through: UserGroupModel});
}

export {initUserGroupModel, UserGroupModel};
