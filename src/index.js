import express from 'express';
import bodyParser from 'body-parser';

import { errorHandler } from './middleware/errorHandling';
import { userRouter } from './routes/userRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', userRouter);
app.use('/users', errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});