// getTime.js - module een geformatteerde tijd (hh:mm:ss) teruggeeft.
module.exports = function () {
	let now = new Date();
	let tijd = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
	return tijd;
};