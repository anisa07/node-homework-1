import { isAuthRequired, verifyToken } from '../services/tokenService';

export function checkRoute(request, response, next) {
    const url = request.originalUrl;

    if(isAuthRequired(url)) {
        const authHeader = request.header('Authorization');

        if(authHeader) {
            try {
                verifyToken(authHeader);
            } catch(err) {
                response.status(403).send(`Error! Forbidden Error. ${err.message}`);
            }
        } else {
            response.status(401).send('Error! Unauthorized Error. Authorization header is absent!');
        }
    }
    next();
};
