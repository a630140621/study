/**
 * Created by wxy on 2017/6/19.
 */
'use strict'

var fs = require('fs');
var http = require('http');
var url =require('url');

http.createServer(function (request,response) {
    if (request.url !== '/favicon.ico'){
        // console.log(request.url);
        //
        // fs.readFile('./demo.html','utf-8',function (err,data) {
        //     if (err){
        //         console.log(err.toString());
        //     }
        //
        //     response.writeHead(200,{'Content-Type':'text/html,utf-8'});
        //     response.write(data);
        //     response.end();
        // });

        var pathname = url.parse(request.url).pathname;

        console.log('Request for ' + pathname + ' received.');

        response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
        response.write('');
        response.end();
    }
}).listen(9412);

console.log('server running at http://127.0.0.1:9412/');
