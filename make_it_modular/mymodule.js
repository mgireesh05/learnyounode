var fs = require('fs');
var path = require('path');

module.exports = mymodule = function(pathname, extension, callback) {

	function cb(err, list) {
		if (err) {
			return callback(err);
		}

		var output = [];
		for (var i = 0; i < list.length; i++) {
			if ("." + extension == path.extname(list[i])) {
				output.push(list[i]);
			}
		}

		callback(null, output);
	}

	fs.readdir(pathname, cb);
}
