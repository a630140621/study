/**
 * Created by love&crazy on 2017/6/28.
 */
'use strict';

var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var mysql_user = require('./mysql_user');
var mysql = require('mysql');
var events = require('events');

// 连接到数据库user
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'user'
});

var emitter = new events.EventEmitter();

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
        fs.readFile('../html/login.html','utf-8',function (err,data) {
            if (err){
                console.log(err.toString());
                response.writeHead(404,{'Content-Type':'text/plain'});
                response.write('404');
                response.end();
            }else{
                response.writeHead(200,{'Content-Type':'text/html'});
                response.write(data);
                response.end();
            }
        });
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
    },
    // 表单处理部分
    form_get : function (request,response) {
        let query = url.parse(request.url,true).query;

        // 使用对象来存放form提交过来的值
        // console.log(query['username'] + query['password']);

        response.writeHead(200,{'Content-Type':'text/html;charset="utf8"'});
        // 连接user数据库，接收数据库查询结果（数组），如果数组为空，则表示没有此用户
        connection.connect();

        let sql_username = 'SELECT * FROM user WHERE username =' + '"' + query['username'] + '"';

        connection.query(sql_username,function (err,result) {
            if (err){
                console.log(err.toString());
                throw err;
            }else{
                if (result.length == 0){
                    // response.write('用户不存在，请创建用户<br>');
                    // response.write('<a href = "http://127.0.0.1:9412/register">点击此处创建新用户</a>');
                    // response.end();

                    // 使用事件
                    emitter.once('success',function (response) {
                        response.write('用户不存在，请创建用户<br>');
                        response.write('<a href = "http://127.0.0.1:9412/register">点击此处创建新用户</a>');
                        response.end();
                    });
                    // 触发事件
                    emitter.emit('success',response);
                }else{
                    // 验证用户名密码是否匹配
                    let sql_password = 'SELECT * FROM user WHERE username =' + "'" + query['username'] + "'"
                        + 'AND password =' + "'" +query['password'] + "'";
                    let result_password = connection.query(sql_password,function (err,result) {
                        if (err){
                            console.log(err.toString());
                            throw err;
                        }else if(result.length == 0){
                            response.write('您输入的密码有误，请重新输入');
                            response.end();
                        }else{
                            response.write('登录成功');
                            response.end();
                        }
                    });
                }
            }
        });
    },
    form_post : function (request, response) {
        let post = '';

        // 接受post传递过来的数据
        request.on('data',function (chunk) {
                post += chunk;
        });

        request.on('end',function () {
            var query = querystring.parse(post);
            // console.log(query['username'] + '\n' + query['password']);

            let addsql = 'INSERT INTO user(username,password) VALUES(?,?)';
            let addsqlParams = [query['username'],query['password']];
            mysql_user.insert(addsql,addsqlParams);

            response.write('insert success!');
            response.end();
        });
    }
};