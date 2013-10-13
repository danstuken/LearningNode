var http = require('http');

var server = http.createServer();

function handleRequest(request, response){
	response.writeHead(200, {'content-type': 'text/plain'})
	response.write('hello world');
	response.end();
}

server.on('request', handleRequest);

server.listen(8080);