import express from 'express';
import bodyParser from 'body-parser';

import {errorHandler, errorHandler500} from './middleware/errorHandling';
import {logger} from './middleware/logger';
import {userRouter} from './routes/userRoute';
import {groupRouter} from './routes/groupRoutes'
import {userGroupRouter} from './routes/userGroupRoute'
import db from './database/database';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', logger);
app.use('/users', userRouter);
app.use('/groups', groupRouter);
app.use('/user-group', userGroupRouter);
app.use('/', errorHandler);
app.use('/', errorHandler500);

const PORT = 5000;

db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});

process.on('uncaughtException', function (err) {
    console.error('UncaughtException: ', err.message);
    process.exit(1)
});

