import { UserModel, initUserModel } from "./UserModel";
import { GroupModel, initGroupModel } from "./GroupModel";
import { UserGroupModel, initUserGroupModel } from "./UserGroupModel";
import { LoginModel, initLoginModel } from "./LoginModel";

const initModels = (sequelize) => {
    initUserModel(sequelize);
    initGroupModel(sequelize);
    initUserGroupModel(sequelize);
    initLoginModel(sequelize);
};

export {
    initModels,
    UserModel,
    GroupModel,
    UserGroupModel,
    LoginModel
};
