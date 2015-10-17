var fs = require('fs');

function callback(err, data) {
	if (!err) {
		var str = data.toString();
		var lines = str.split("\n").length - 1;
		console.log(lines);
	}
}

fs.readFile(process.argv[2], callback);
