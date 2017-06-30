/**
 * Created by love&crazy on 2017/6/28.
 */
'use strict';

var fs = require('fs');

module.exports = {
    register : function (requset,response) {
        fs.readFile('../html/register.html','utf-8',function (err,data) {
            if (err){
                console.log(err);
                response.writeHead(404,{'Content-Type':'text/plain'});
                response.write('404');
                response.end();
            }else {
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data);
                response.end();
            }
        });
    },
    login : function (request,response) {
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('我是登录方法');
        response.end('');
    },
    tulips : function (request,response) {
        // 使用二进制读取图片(读写时都需要注意)
        fs.readFile('../image/Tulips.jpg','binary',function (err,data) {
            if (err){
                console.log(err);
            }else {
                response.writeHead(200,{'Content-Type':'image/jpeg'});
                response.write(data,'binary');
                response.end('');
            }
        });
    }
}