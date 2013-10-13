require('http')
	.createServer(function handleRequest(request, response){
		response.writeHead(200, {'content-type': 'text/plain'})
		response.end('hello world - compact');
	})
	.listen(8080);

