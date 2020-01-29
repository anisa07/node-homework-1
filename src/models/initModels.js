import { UserModel, initUserModel } from "./UserModel";

const initModels = (sequelize) => {
    initUserModel(sequelize);
};

export {
    initModels,
    UserModel
};