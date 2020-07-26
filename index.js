const http = require('http');

const colors = require('colors');

const handlerServer = (req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hola mundo</h1>');
    res.end();
};


const server = http.createServer(handlerServer);

server.listen(3000, () => {
    console.log('Server en el puerto 3000'.underline.green);
});