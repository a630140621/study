/**
 * Created by love&crazy on 2017/7/1.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'user'
});

connection.connect();

var sql = 'select * from user where username = "lh" AND password = "123"';

connection.query(sql,function (err,result) {
    if (err){
        console.log(err.toString());
        throw err;
    }

    console.log(result);
});

connection.end();