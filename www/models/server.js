/**
 * Created by love&crazy on 2017/6/28.
 */
'use strict';

var http = require('http');
var url = require('url');
var path = require('path');
var router = require('./router');

var port = 80;
http.createServer(function (request,response) {
    if (request.url !== '/favicon.ico'){
        var pathname = '',
            basename = '';

        // 获得url的pathname
        pathname = url.parse(request.url).pathname;

        // 获得basename
        basename = path.basename(pathname);
        console.log(basename);

        try{
            // 使用路由
            router[basename](request,response);
        }catch (err){
            response.writeHead(404,{'Content-type':'text/plain;charset=utf-8'});
            response.write('404');
            response.end();
        }
    }
}).listen(port);

console.log('server running at http://127.0.0.1:' + port);
