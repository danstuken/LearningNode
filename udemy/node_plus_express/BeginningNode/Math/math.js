
var a = process.argv[2];
var b = process.argv[3];

var multiply = function(first, second, callback){
	console.log('multiply started');
	setTimeout(function(){
		var product = first * second;
		console.log('multiply finished');
		callback(product);
	}, 2000)
}

var report = function(value){
	console.log(value);
}

var result = multiply(a, b, report);