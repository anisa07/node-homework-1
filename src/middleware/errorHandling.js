export function errorHandler(err, request, response, next) {
    response.status(400).send(`Error occurs! ${err}`);

    next();
}

export function errorHandler500(err, req, res, next) {
    res.status(500).send('Internal Server Error');
}
