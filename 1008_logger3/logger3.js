// Require een andere module
const time = require('./getTime');
// Exporteer verschillende algemene logging-methoden
module.exports = function () {
	this.log = function (msg) {
		console.log(time() + ', Log >>' + msg);
	};

	this.info = function (msg) {
		console.info(time() + ', Info >>' + msg);
	};

	this.error = function (msg) {
		console.error(time() + ', Error >>' + msg);
	};

	return this;
};