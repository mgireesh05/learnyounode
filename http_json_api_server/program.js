var http = require('http');
var fs = require('fs');
var url = require('url');
var isodate = require("isodate");

var server = http.createServer(function(request, response) {
	var parsed = url.parse(request.url, true);
	var date = null;
	var resp = null;

	if (parsed.pathname == '/api/parsetime') {
		date = new Date(parsed.query.iso);
		resp = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};

		response.writeHead(200, {
			'Content-Type': 'application/json'
		});

		response.end(JSON.stringify(resp));

	} else if (parsed.pathname == '/api/unixtime') {
		date = new Date(parsed.query.iso);
		resp = {
			"unixtime": date.getTime()
		};

		response.writeHead(200, {
			'Content-Type': 'application/json'
		});

		response.end(JSON.stringify(resp));

	} else {
		response.writeHead(404);
		response.end("Invalid endpoint");
	}
});

server.listen(process.argv[2]);
