/**
 * Created by love&crazy on 2017/6/18.
 */
var http = require('http');

http.createServer(function (request,response) {
    if (request.url !== '/favicon.ico') {
        console.log('request:' + request.method + ' response:' + request.url);

        response.writeHead(200, {'Content-Type': 'text/html'});

        console.log('访问');

        response.end();
    }
}).listen(9412);

console.log('server running at http://127.0.0.1:9412/');