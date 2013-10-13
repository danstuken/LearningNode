var http = require("http");

function startHttpServer(portNumber){
	http.createServer(function(request, response){
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello world");
		response.end();
	}).listen(portNumber);

	console.log("server started. Listening on " + portNumber);
}

exports.startHttpServer = startHttpServer;