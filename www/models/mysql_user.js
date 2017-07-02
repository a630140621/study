/**
 * Created by love&crazy on 2017/7/2.
 */
'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'user'
});

// 插入
function insert(addsql,addsqlParams) {
    connection.connect();

    connection.query(addsql,addsqlParams,function (err,result) {
        if (err){
            console.log(err.toString());
            throw err;
        }
        console.log('insert success');
    });

    connection.end();
}

// 查询并返回结果数组
function select(sql) {
    connection.connect();

    connection.query(sql,function (err,result) {
        if (err) {
            console.log(err.toString());
            throw err;
        }else{
            console.log('select success!')
            return result;
        }
    });

    connection.end();
}

module.exports = {
    insert,
    select
}

