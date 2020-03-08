export function errorHandler(err, request, response, next) {
    if ((request.url === '/create' && request.method === 'POST')
        || (request.route.path === '/:id' && request.method === 'PATCH')) {
        response.status(400).send(`Error occurs! ${err.stack}`);
    }
    next();
}

export function errorHandler500(err, req, res, next) {
    res.status(500).send('Internal Server Error');
}
