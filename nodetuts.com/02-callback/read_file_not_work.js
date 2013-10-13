var fs = require('fs');

//node is async and the following will not work

var results = fs.readFile('a_file.txt');
console.log('File contents:', results);
