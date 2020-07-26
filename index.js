const http = require('http');

const handlerServer = function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hola mundo</h1>');
    res.end();
};


const server = http.createServer(handlerServer);

server.listen(3000, function() {
    console.log('Server en el puerto 3000');
})