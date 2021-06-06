const { argv } = require('./yargs');
const { createTableFile } = require('./helpers/create');
require('colors');

const { b, l, s, c } = argv;

createTableFile(b, l , s, c)
	.then( ({dir , file}) => {
		console.log(`Directory of files -> ${dir.red}`);
		console.log(`Name of file created -> ${file.yellow}`);
	})
	.catch(err => console.log(err));
