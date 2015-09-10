var zombie = require('zombie');

function World(callback) {
	this.browser = new zombie();
	
	this.visit = function (url, callback) {
		this.browser.visit(url, callback);
	};
	
	callback();
}

module.exports.World = World;