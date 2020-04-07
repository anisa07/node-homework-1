import Sequelize from 'sequelize';

class GroupModel extends Sequelize.Model {
}

function initGroupModel(sequelize) {
    GroupModel.init({
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        permissions: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
    }, {modelName: 'group', sequelize});
}

export {initGroupModel, GroupModel};
