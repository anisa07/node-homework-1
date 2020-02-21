import { UserModel, initUserModel } from "./UserModel";
import { GroupModel, initGroupModel } from "./GroupModel";
import { UserGroupModel, initUserGroupModel } from "./UserGroupModel";

const initModels = (sequelize) => {
    initUserModel(sequelize);
    initGroupModel(sequelize);
    initUserGroupModel(sequelize);
};

export {
    initModels,
    UserModel,
    GroupModel,
    UserGroupModel
};