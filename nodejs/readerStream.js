/**
 * Created by wxy on 2017/6/14.
 */

var fs = require("fs");

var data = "";

// 创建可读流
var readerStream = fs.createReadStream("input.txt");

// 设置编码
readerStream.setEncoding("utf8");

// 处理流事件
readerStream.on("data",function (s) {
    data += s;
    console.log(data.toString());
});

readerStream.on("end",function () {
    console.log("流处理完毕");
});

readerStream.on("error",function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");