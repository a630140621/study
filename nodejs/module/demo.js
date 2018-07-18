"use strict";
let log = require('./module_a');

log('some test',(err,text)=>{
	console.log(text);
})