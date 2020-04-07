import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {errorHandler, errorHandler500} from './middleware/errorHandling';
import {logger} from './middleware/logger';
import {checkRoute} from './middleware/auth';
import {corsOptions} from './middleware/corsHandling';
import {userRouter} from './routes/userRoute';
import {groupRouter} from './routes/groupRoutes'
import {userGroupRouter} from './routes/userGroupRoute'
import {loginRouter} from './routes/loginRoutes'
import db from './database/database';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', logger);
app.use('/', cors(corsOptions));
app.use('/', checkRoute);
app.use('/', loginRouter);
app.use('/users', userRouter);
app.use('/groups', groupRouter);
app.use('/user-group', userGroupRouter);
app.use('/', errorHandler);
app.use('/', errorHandler500);

const PORT = 5000;

db.sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});

process.on('uncaughtException', function (err) {
    console.error('UncaughtException: ', err.message);
    process.exit(1)
});

