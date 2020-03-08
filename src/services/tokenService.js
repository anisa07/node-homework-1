import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SALT = process.env.SALT_SECRET;
const sR = [
    { path: '/groups' },
    { path: '/users' },
    { path: '/user-group' }
];

export const generateJWTToken = (userData) =>{
    return jwt.sign(userData, SALT, { expiresIn: '1h' });
};

export const verifyToken = (token) =>{
    jwt.verify(token, SALT);
};

export const isAuthRequired = (url, sessionRoutes = sR) => {
    for (let routeObj of sessionRoutes) {
        if (url.startsWith(routeObj.path)) {
            return true;
        }
    }
    return false;
};
