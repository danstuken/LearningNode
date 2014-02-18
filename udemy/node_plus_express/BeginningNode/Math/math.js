
var a = process.argv[2];
var b = process.argv[3];

var multiply = function(first, second){
	var product = first * second;
	return product;
}

var report = function(value){
	console.log(value);
}

var result = multiply(a, b);
report(result);