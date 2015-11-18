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
	'  $ pkg-downloads day chalk',
	'  ${logSymbols.info} result',
	'  $ pkg-downloads week elephants',
	'  {logSymbols.error} error message'
]);

if (cli.input.length < 2) {
	console.error('Expected two strings');
	process.exit(1);
}

pkgDownloads(cli.input[0], cli.input[1]).then(res => {
	console.log(`${logSymbols.info} ` + res.downloads + ` downloads during ` + res.start + ' - ' + res.end);
}).catch(function (err) {
	console.log(`${logSymbols.error} ` + err);
});
