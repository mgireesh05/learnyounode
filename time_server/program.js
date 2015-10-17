var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
	data = strftime('%F %H:%M');
	socket.write(data);
	socket.end();
});

server.listen(process.argv[2]);
