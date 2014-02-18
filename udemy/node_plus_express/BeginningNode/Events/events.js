var events = require('events');
var eventEmitter = new events.EventEmitter();

var count = 0;

var increaseCount = function(){
	console.log('new visitor');
	count++;
}

var reportCount = function(){
	console.log('Total Count: ', count);
}

eventEmitter.on('visit', increaseCount);
eventEmitter.on('visit', reportCount);

setInterval(function(){
	eventEmitter.emit('visit');
}, 1000);