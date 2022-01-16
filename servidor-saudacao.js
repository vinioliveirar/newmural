const http = require('http');

/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.OutgoingMessage} res 
 */
const requestListener = function (req, res) {
    console.log('method', req.method)
    console.log('recurso', req.url)
    res.writeHead(200);
    let name = req.url.substring(1, req.url.length)
    if (name === '') {
        name = 'World'
    }
    res.end(`Hello, ${name}!`)
}

const server = http.createServer(requestListener);
server.listen(8080);