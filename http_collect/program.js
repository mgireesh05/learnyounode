var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {

	response.setEncoding('utf8');

	response.on("error", function(data) {
		console.log("HTTP Error", data);
	});

	response.pipe(bl(function(err, data) {
		if (err) {
			return console.error(err);
		}
		console.log(data.length);
		console.log(data.toString());
	}));
});
