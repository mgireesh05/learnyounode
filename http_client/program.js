var http = require('http');

http.get(process.argv[2], function(response) {

	response.setEncoding('utf8');
	response.on("error", function(data) {
		console.error("HTTP Error", data);
	});

	response.on("data", function(data) {
		console.log(data);
	});
});
