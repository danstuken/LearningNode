var net = require('net');
var format = require('util').format;

var server = net.createServer();

//server is an event emitter, the anonymous function is a listener
//i.e. <emitter>.on()
server.on('connection', function(conn){

   //conn is another emitter

   var printPrefix = '[' + conn.remoteAddress + ':' + conn.remotePort + '] ';

   function print(){
      var formatted = format.apply({}, arguments);
      console.log(printPrefix + formatted);
   }

   print('connected');

   conn.on('data', function(data){
      print('got some data:', data);
   });

   conn.on('end', function(){
      print('ended.');
   });

   conn.on('close', function(){
      print('closed.');
   });

   conn.on('error', function(err){
      print('error:', err);
   });

   conn.setEncoding('utf-8');
});

server.on('error', console.error);

server.listen(8080);