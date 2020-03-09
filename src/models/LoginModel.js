import Sequelize from 'sequelize';

class LoginModel extends Sequelize.Model {
}

function initLoginModel(sequelize) {
    LoginModel.init({
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
            },
        },
    }, {modelName: 'login', sequelize});
}

export {initLoginModel, LoginModel};
