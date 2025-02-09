import http from 'http';
import { logger } from '../../utils/logger.js'
import fs from 'fs';

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
    serverError: 500,
    badRequest: 400
}

const PORT = 3000;

const server = http.createServer((req, res) => {
    try {
        fs.readFile(`.public/${req.url === '/' ? 'index.html' : req.url}`, (error, data) => {
            if (error) {
                res.writeHead(statusCodes.notFound, { 'Content-Type': mimeTypes.html });
                res.end('404');
            } else {
                res.writeHead(statusCodes.ok, { 'Content-Type': mimeTypes.html });
                res.end(data);
            }
        })
    } catch (e) {
        logger('error', e.message);
        res.writeHead(statusCodes.serverError, { 'Content-Type': mimeTypes.html });
        res.end('500');
    }
});

server.listen(PORT, () => {
    logger('info', `Server is running on port ${PORT}`);
});