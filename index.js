const http = require('http');

const handlerServer = function(req, res) {

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Esto es un simple texto');
    res.end();
};

http.createServer(handlerServer).listen(3000);