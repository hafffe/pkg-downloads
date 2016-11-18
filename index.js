'use strict';
const got = require('got');
const Promise = require('pinkie-promise');

module.exports = function (name, opts) {
	opts = opts || {};

	if (typeof name !== 'string') {
		return Promise.reject(new Error('Package name required'));
	}

	if (typeof opts.period !== 'string') {
		return Promise.reject(new Error('Time period is required'));
	}

	const api = 'https://api.npmjs.org/downloads/point/';
	const period = 'last-' + opts.period;
	const url = api + period + '/' + name;

	return got(url, {json: true}).then(function (res) {
		if (res.body.error) {
			return Promise.reject(new Error('Package info couldn\'t be fetched'));
		}

		return res.body.downloads;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Module doesn\'t exist';
		}

		throw err;
	});
};
