var fetch = require('isomorphic-fetch');
var host = 'api.trustpilot.com';
var cacheLifetimeMilliSeconds = 100000; // 24 * 60 * 60 * 1000;
var instances = [];


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
			console.log('cached data' + this.data);
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
			console.log(json);
		} catch (error) {
			console.log(error);
		}
	}
};

module.exports = function (path) {
	if (!instances[path]) instances[path] = new Trustpilot(path);
	return instances[path];
};

