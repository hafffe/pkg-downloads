'use strict';
const got = require('got');
const Promise = require('pinkie-promise');
const api = 'https://api.npmjs.org/downloads/point/';

module.exports = function (period, name) {
	if (!(typeof period === 'string' && period.length !== 0)) {
		return Promise.reject(new Error('Time period is required'));
	}

	if (!(typeof name === 'string' && name.length !== 0)) {
		return Promise.reject(new Error('Package name required'));
	}

	const url = `${api}${period}/${name}`;

	return got(url).then(function (res) {
		const result = JSON.parse(res.body);

		return {
			err: result.error ? true : false,
			downloads: result.downloads ? result.downloads : null,
			msg: result.downloads ? null : 'Package couldn\'t be found'
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'module doesn\'t exist';
		}

		throw err;
	});
};
