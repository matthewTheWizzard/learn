import http from 'http';
import { logger } from '../../utils/logger.js';

const mimeTypes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    json: 'application/json',
    png: 'image/png',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    text: 'text/plain'
}

const statusCodes = {
    ok: 200,
    created: 201,
    notFound: 404,
    permenantRedirect: 301,
    serverError: 500,
    badRequest: 400
}

const PORT = 3001;

const server = http.createServer((req, res) => {
    logger('info', `${req.method} / ${req.url}`);
    logger('info', `${req.headers['user-agent']}`);
    const foo = () => {
        const random = Math.floor(Math.random() * 10);
        
        try {
            if (random > 7) {
                throw new Error('More than 7', { 'cause': random });
            } 
            
            if (random > 5) {
                throw new Error('More than 5', { 'cause': random });
            }
            
            logger('success', 'Success');
            res.writeHead(statusCodes.created, { 'Content-Type': mimeTypes.json });
            res.end(JSON.stringify({ message: 'Okay' }));
        } catch (e) {
            logger('error', e.message);
            res.writeHead(statusCodes.badRequest, { 'Content-Type': mimeTypes.json });
            res.end(JSON.stringify({ message: e.message }));
        }
    }

    foo();
});

server.listen(PORT, () => {
    logger('info', `Server is running on port ${PORT}`);
});