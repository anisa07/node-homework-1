import { UserModel, initUserModel } from "./UserModel";
import { GroupModel, initGroupModel } from "./GroupModel";

const initModels = (sequelize) => {
    initUserModel(sequelize);
    initGroupModel(sequelize);
};

export {
    initModels,
    UserModel,
    GroupModel
};