import {getByLoginAndPassword, authorize, getByLogin} from '../services/loginService';
import { generateJWTToken } from '../services/tokenService';

export class LoginController {
    async authorizeNewUser(request, response) {
        let user = await getByLogin(request.body);

        if (!user) {
            user = await authorize(request.body);

            response.send(user);
        }

        response.status(409).send(`Error occurs! User with such login already exists!`);
    }

    async loginExistingUser(request, response) {
        let user = await getByLoginAndPassword(request.body);

        if (user) {
            const token = generateJWTToken(request.body);

            response.send(token);
        }

        response.status(401).send(`Error occurs! User with such login does not exist!`);
    }
}
