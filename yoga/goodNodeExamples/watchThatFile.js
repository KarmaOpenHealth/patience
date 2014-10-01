console.log("watchThatFile Started");

const
fs = require('fs');

fs.watch('fileImWatching.txt', function() {
	console.log("stop touching me!");
});

console.log("watchThatFile Ended, but there is a fs.watch in place");