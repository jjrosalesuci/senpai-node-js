/*
 * Senpai NodeJS 
 * Ejemplo 05
 */
var http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(3000);

console.log('Server running at http://localhost:3000/');