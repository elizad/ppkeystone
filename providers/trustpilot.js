var fetch = require('isomorphic-fetch');
var host = 'api.trustpilot.com';
var cacheLifetimeMilliSeconds = 5000; // 24 * 60 * 60 * 1000;
var instance;

class Trustpilot {
	constructor (path) {
		this.path = path;
		this.data = null;
		this.flushCache();
	}

	flushCache () {
		setTimeout(() => this.flushCache(), cacheLifetimeMilliSeconds);
	}

	async getData () {
		if (this.data) {
			console.log('cached data');
			return this.data;
		}

		await this.loadData();
		return this.data;
	}

	async loadData () {
		console.log('--> data is reloaded');
		try {
			var result = await fetch(`https://${host}${this.path}`);
			var json = await result.json();
			this.data = json;
		} catch (error) {
			console.log(error);
		}
	}
};

module.exports = function (path) {
	if (!instance) instance = new Trustpilot(path);
	return instance;
};
