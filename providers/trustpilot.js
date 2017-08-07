// ./providers/trustpilot.js
var https = require('https');
var hostname = 'api.trustpilot.com';
var path = '/v1/business-units/57ff44480000ff000595f84b/?apikey=38ABXsBFEYy7cWQLXkWagwuuCBtfT8BG';
var cacheLifetimeMilliSeconds = 5000; // 24 * 60 * 60 * 1000;
var instance;

class Trustpilot {
	constructor () {
		this.data = null;
		this.flushCache();
	}

	flushCache () {
		this.data = null;
		setTimeout(() => this.flushCache(), cacheLifetimeMilliSeconds);
	}

	getData (callback) {
		if (this.data) {
			console.log('cached data');
			callback(this.data);
		}
		this.loadData(callback);
	}

	loadData (callback) {
		https.request(`https://${hostname}${path}`, (res) => {
			var data = '';

			res.on('error', (error) => {
				console.log(error);
			});

			res.on('data', (d) => {
				data += d;
			});


			res.on('end', () => {
				console.log(JSON.encode(data));
				this.data = JSON.encode(data);
				if (callback) {
					callback(this.data);
				}
			});
		});
	}
};

module.exports = function () {
	if (!instance) instance = new Trustpilot();
	return instance;
};
