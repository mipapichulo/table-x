const fs = require('fs');
const colors = require('colors');
const { join } = require('path');

const setColor = (affirmation) => {
	affirmation
		? colors.enable()
		: colors.disable();
}

const setTitle = (str) => {
	console.log('=============================================='.green)
	console.log(`               ${str.blue}`)
	console.log('=============================================='.green)
}

const createTableFile = async (base, limit, show, color) => {
	try{
		let data = '', consol = '';
		const dir = join(__dirname, '..', '..', 'output');
		const file = `b${base}-l${limit}.txt`;
		setColor(color);
		
		for(let i = 1; i <= limit; i++){
			data += `${base} * ${i} = ${base * i}\n`;
			consol += `${base} ${'*'.green} ${i} ${'='.green} ${base * i}\n`;
		}

		if(show){
			setTitle(`Table of ${base}`);
			console.log(consol);
		}
		
		fs.writeFileSync(`${dir}/${file}`, data)
		return { dir, file };
		
	} catch(err){
		throw 'WOTEFOCK -> ' + err;
	}

}

module.exports = {
	createTableFile
}
