var fs = require('fs');

fs.readFile('a_file.txt', function (err, results){
		if(err) return handleError(err);
		console.log('File contents: ', results);
	}
);
