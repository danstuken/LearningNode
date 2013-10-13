var net = require('net');
var format = require('util').format;

var server = net.createServer();

//server is an event emitter, the anonymous function is a listener
//i.e. <emitter>.on()
//event types are strings of characters, e.g. "connection"
server.on('connection', function(conn){

   //conn is another emitter

   var printPrefix = '[' + conn.remoteAddress + ':' + conn.remotePort + '] ';

   function print(){
      var formatted = format.apply({}, arguments);
      console.log(printPrefix + formatted);
   }

   print('connected');

   // event handlers can be defined in advance
   function dataHandler(data){
      print('got some data:', data);

      //we can emit events using 'emit'
      conn.emit('error', new Error('OMG! Its all gone bad!!'));
   }

   conn.on('data', dataHandler);

   //event handlers can be removed - e.g. here after 5 seconds
   setTimeout(function(){
      conn.removeListener('data', dataHandler);
   }, 5000);

   conn.on('end', function(){
      print('ended.');
   });

   function closeHandler(){
      print('closed 1');
   }

   function closeHandler2(){
      print('closed 2');
   }

   //more than one handler can be registered with an event
   //when we use once() we only care about the first instance of that event...
   //and each handler will be called.
   conn.once('close', closeHandler);
   conn.once('close', closeHandler2);

   //commented out to show use of uncaughtException
   //conn.once('error', function(err){
   //   print('error:', err);
   //});

   conn.setEncoding('utf-8');
});

//'error' is a special case - any event fired with the 'error' event type will
//that doesn't have an associated handler will cause an uncaught exception error
server.on('error', console.error);

//don't use this for anything other than logging. Lack of context means you should
//not rely on this but listen for the 'error' event on the emitter you care about.
//This will mean you can tidy up the used resources properly.
process.on('uncaughtException', function(err){
   console.log('uncaught exception', err);
   process.exit();
});

server.listen(8080);