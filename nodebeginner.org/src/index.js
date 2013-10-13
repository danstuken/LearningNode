var httpServer = require("./server.js");
var router = require("./router.js");

httpServer.startHttpServer(8899, router);