const express = require('express');

const app = express();

app.route('/').get(async (req, res) => {
	let text = await getText()
	let error;
	await throwError().catch(err => {
		console.log(err)
		error = err;
	})

	console.log('begin send');
	res.send(error.message);
	console.log('after send');
});

async function throwError1(data) {
	throw new Error('some err 1');
	return;
}

async function throwError(data) {
	throw new Error('some err');
	return;
}

function getText() {
	return 'Hello World!';
}

app.listen(9412);