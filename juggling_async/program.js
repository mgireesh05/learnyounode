var http = require('http');
var bl = require('bl');
var output = [];
var count = 0;

function httpGet(index) {
	http.get(process.argv[2 + index], function callback(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
			if (err) {
				return console.error(err);
			}

			output[index] = data.toString();
			count++;

			if (count == 3) {
				for (var i = 0; i < 3; i++) {
					console.log(output[i]);
				}
			}
		}));
	});
}


for (var i = 0; i < 3; i++) {
	httpGet(i);
}
