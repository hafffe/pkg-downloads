'use strict';
const got = require('got');

module.exports = (name, opts) => {
	opts = opts || {};

	if (typeof name !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof name}\``));
	}

	if (typeof opts.period !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof opts.period}\``));
	}

	const url = `https://api.npmjs.org/downloads/point/last-${opts.period}/${name}`;

	return got(url, {json: true})
		.then(res => {
			return res.body.downloads;
		})
		.catch(err => {
			if (err && err.statusCode === 404) {
				throw new Error(`Module ${name} doesn't exist`);
			}

			throw err;
		});
};
