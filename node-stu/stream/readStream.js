/**
 * Created by love&crazy on 2017/6/17.
 */
var fs =require('fs');

var rs = fs.createReadStream('../file/input.txt','utf-8');

rs.on('data',function (chunk) {
    console.log('Data:');
    console.log(chunk);
});

rs.on('end',function () {
    console.log('写入流结束');
});

rs.on('error',function (err) {
    console.log(err);
});

console.log('程序执行完毕');