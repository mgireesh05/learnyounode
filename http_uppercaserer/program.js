var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function(request, response) {

	if (request.method != 'POST') {
		return res.end('send me a POST\n');
	}

	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(process.argv[2]);
