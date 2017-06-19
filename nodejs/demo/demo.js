/**
 * Created by wxy on 2017/6/19.
 */
var http = require('http');

http.createServer(function (request,response) {
    if (request.url !== '/favicon.ico') {
        console.log('Request:' + request.url);

        response.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});
        response.write('输出一些内容');
        response.end('end也能输出内容');
    }
}).listen(9412);

console.log('Server running at http://127.0.0.1:9412/');