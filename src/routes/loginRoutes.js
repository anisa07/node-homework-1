import express from 'express';
import { LoginController } from '../controllers/loginController';
import { logPromiseError } from './errorLog';

const loginRouter = express.Router();
const loginController = new LoginController();

// authorize new user
loginRouter.post('/authorize', (request, response) => {
    loginController
        .authorizeNewUser(request, response)
        .catch(e => logPromiseError(request));
});

// login existing user
loginRouter.post('/login', (request, response) => {
    loginController
        .loginExistingUser(request, response)
        .catch(e => logPromiseError(request))
});

export { loginRouter };
