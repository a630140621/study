/**
 * Created by wxy on 2017/6/19.
 */
'use strict'

var fs = require('fs');

fs.readFile('../input.txt',function (err,data) {
    if (err){
        return console.log(err);
    }else{
        fs.writeFile('../output.txt',data,function (err) {
            if (err) return console.log(err.toString());

            console.log('写入完毕');
        });
    }
});

console.log('程序执行结束');