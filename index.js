const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola mundo con express</h1>');
})
server.listen(3000, () => {
    console.log('Server on port 3000'.green);
});


















// const http = require('http');

// const colors = require('colors');

// const handlerServer = (req, res) => {

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hola mundo</h1>');
//     res.end();
// };


// const server = http.createServer(handlerServer);

// server.listen(3000, () => {
//     console.log('Server en el puerto 3000'.underline.green);
// });