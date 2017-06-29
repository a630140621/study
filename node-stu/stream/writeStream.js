/**
 * Created by love&crazy on 2017/6/18.
 */
'use strict';
var fs = require('fs');

var ws = fs.createWriteStream('./output.txt','utf-8');

ws.write('写入一些数据','utf-8');
ws.end();

ws.on('finish',function () {
    console.log('finish');
});

console.log('programe end');