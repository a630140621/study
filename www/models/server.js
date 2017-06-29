/**
 * Created by love&crazy on 2017/6/28.
 */
'use strict';

var http = require('http');
var url = require('url');
var router = require('./router');

var port = 9412;
http.createServer(function (request,response) {
    if (request.url !== '/favicon.ico'){
        var pathname = '';

        // 获得url的pathname
        pathname = url.parse(request.url).pathname;

        // 去掉路径中的'/'
        pathname = pathname.replace(/\//,'');
        console.log(pathname);

        // 使用路由
        router[pathname](request,response);
    }
}).listen(port);

console.log('server running at http://127.0.0.1:' + port);