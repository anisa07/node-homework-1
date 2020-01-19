import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { initModels } from '../models/initModels'

dotenv.config();

const db = {};
const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
    },
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

initModels(db.sequelize);

export default db;
