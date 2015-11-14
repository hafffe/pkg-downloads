#!/usr/bin/env node
'use strict';
const logSymbols = require('log-symbols');
const meow = require('meow');
const pkgDownloads = require('./');

const cli = meow([
	'Usage',
	'  $ pkg-downloads <day|week|month> <name>',
	'',
	'Examples',
	'  $ pkg-downloads chalk',
	'  ${logSymbols.info} 10818357',
	'  $ pkg-downloads elephants',
	'  {logSymbols.error} Not found '
]);

const period = 'last-' + cli.input[0];
const name = cli.input[1];

if (!period || !name) {
	console.error('Period and Username had not been specified');
	process.exit(1);
}

pkgDownloads(period, name).then(res => {
	console.log(res.err ? `${logSymbols.error} ` + res.msg : `${logSymbols.info} ` + res.downloads + ` ${period}`);
});
