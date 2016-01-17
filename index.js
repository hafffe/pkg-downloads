'use strict';
var got = require('got');
var Promise = require('pinkie-promise');
var api = 'https://api.npmjs.org/downloads/point/';

module.exports = function (name, opts) {
	opts = opts || {};

	if (!(typeof opts.period === 'string' && opts.period.length !== 0)) {
		return Promise.reject(new Error('Time period is required'));
	}

	if (!(typeof name === 'string' && name.length !== 0)) {
		return Promise.reject(new Error('Package name required'));
	}

	if (opts.period.indexOf('last-') === -1) {
		var last = 'last-';
		opts.period = last.concat(opts.period);
	}

	var url = api + opts.period + '/' + name;

	return got(url).then(function (res) {
		var result = JSON.parse(res.body);

		if (result.error) {
			return Promise.reject(new Error('Package info couldn\'t be fetched'));
		}

		return result.downloads;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Module doesn\'t exist';
		}

		throw err;
	});
};
