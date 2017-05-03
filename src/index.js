#!/usr/bin/env node
let getAuthToken = require('registry-auth-token'),
	yargs = require('yargs');

const registry = yargs.argv._[0] || undefined;

const token = getAuthToken(registry);

if (token) {
	console.log(token.token);
}
else {
	console.error('no auth token found!');
}
