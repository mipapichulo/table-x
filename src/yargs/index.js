const options = {
	'b': {
		alias: 'base',
		demandOption: true,
		description: 'Table base',
		type: 'number'
	},
	'l': {
		alias: 'limit',
		demandOption: false,
		default: 12,
		description: 'The limit of table',
		type: 'number'
	},
	's': {
		alias: 'show',
		demandOption: false,
		default: false,
		description: 'Show information of archive',
		type: 'boolean'
	},
	'c': {
		alias: 'color',
		demandOption: false,
		default: false,
		description: 'Show color in the information',
		type: 'boolean'
	}
}

const checked = (argv, options) => {
	const {b, l} = argv
	if (isNaN(b) || b <= 0) {
		throw 'The base must be greater than 0';
	}
	if (isNaN(l) || !Number.isInteger(l) || b <= 0) {
		throw 'The limit must be greater than 0 and it must be integer';
	}

	return true;
}


const {argv} = require('yargs')
	.options(options)
	.check(checked);

module.exports = {
	argv
}
