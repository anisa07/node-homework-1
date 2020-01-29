import Sequelize from 'sequelize';

class UserModel extends Sequelize.Model {
}

function initUserModel(sequelize) {
    UserModel.init({
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: [3, 30],
            isAlphanumeric: true,
          },
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }, {modelName: 'user', sequelize});
}

export {initUserModel, UserModel};
