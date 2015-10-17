var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	if (!err) {
		for (var i = 0; i < list.length; i++) {
			if ("." + process.argv[3] == path.extname(list[i])) {
				console.log(list[i]);
			}
		}
	} else {
		console.log(err);
	}
});
