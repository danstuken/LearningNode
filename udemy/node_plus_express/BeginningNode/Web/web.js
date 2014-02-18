var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
	console.log(request.method, request.url);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	if(request.url == '/about'){
		response.end('About!\n');
	} else{
		response.end('Everything Else!\n');
	}
});

server.listen(3000);
console.log('Server running @ http://localhost:3000');