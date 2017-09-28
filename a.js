var chalk      = require('chalk');
var noop       = chalk.red;
var yeep       = chalk.green;

(function () {
	var a, b, c;
	a = 4;
	b = 5;
	c = a + b;
	console.log(yeep("(u|v) Hi ---- ", noop(c)));
})();


// to run --> node a.js
