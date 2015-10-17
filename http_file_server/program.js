var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

	response.writeHead(200, {
		'content-type': 'text/plain'
	});

	var readStream = fs.createReadStream(process.argv[3]);
	readStream.on('open', function() {
		readStream.pipe(response);
	});
});

server.listen(process.argv[2]);
