/**
 * Created by love&crazy on 2017/6/15.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (request,response) {
    // 获得请求文件的路径名
    var pathname = url.parse(request.url).pathname;

    // 打印请求文件名
    console.log("请求文件" + pathname + "已收到");

    // 读取文件内容并打印
    fs.readFile(pathname.substr(1),function (err,data) {
        if (err){
            console.log(err);
            response.writeHead("404",{"Content":"text/html"});
        }else{
            response.writeHead("200",{"Content":"text/html"});
            console.write(data.toString());
        }
        response.end();
    });
}).listen(9412);

console.log("Server running at http://127.0.0.1:9412/");
