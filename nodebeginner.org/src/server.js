var http = require("http");
var url = require("url");

function startHttpServer(portNumber, route){
	http.createServer(function(request, response){
		var requestedPath = url.parse(request.url).pathname;
		console.log("Request received for " + requestedPath);

		route(requestedPath);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello world");
		response.end();
	}).listen(portNumber);

	console.log("server started. Listening on " + portNumber);
}

exports.startHttpServer = startHttpServer;