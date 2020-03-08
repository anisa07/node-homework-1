import bunyan from 'bunyan';

const log = bunyan.createLogger({
    name: 'tough-app',
});

export function logger(request, response, next) {
    log.info('url:', request.url);
    log.info('method:', request.method);
    log.info('body:', request.body);
    log.info('query:', request._parsedUrl.query);
    next();
}
