const express = require('express');

const app = express();

app.route('/').get((req,res)=>{
	res.send('Hello World!');
});

app.listen(9412);