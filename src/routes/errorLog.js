import bunyan from 'bunyan';

const log = bunyan.createLogger({
    name: 'tough-app-route-error',
});

export function logPromiseError(request) {
    log.error('url:', request.url);
    log.error('method:', request.method);
    log.error('body:', request.body);
    log.error('query:', request._parsedUrl.query);
}
