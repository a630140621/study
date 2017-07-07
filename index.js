/**
 * Created by wxy on 2017/7/6.
 */
const express = require('express');

var app = express();

app.get('/',function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World!');
    response.end();
    console.log('hello');
    console.log(request);
});

app.get('/logs/',function (request,response) {
    response.send('/logs');
    console.log('/logs');
});

app.listen(9412);