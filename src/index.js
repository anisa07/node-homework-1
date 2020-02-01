import express from 'express';
import bodyParser from 'body-parser';

import {errorHandler} from './middleware/errorHandling';
import {userRouter} from './routes/userRoute';
import {groupRouter} from './routes/groupRoutes'
import {userGroupRouter} from './routes/userGroupRoute'
import db from './database/database';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', userRouter);
app.use('/groups', groupRouter);
app.use('/user-group', userGroupRouter);
app.use('/', errorHandler);

const PORT = 5000;

db.sequelize.sync({force: false}).then(() => {
    // magic script to test TASK 4.2
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});
