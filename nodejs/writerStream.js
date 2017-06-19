/**
 * Created by wxy on 2017/6/14.
 */
var fs = require("fs");
var data = "这是一个测试流数据";

// 创建一个写入流
var wstream = fs.createWriteStream("output.txt");

// 使用utf8编码写入数据
wstream.write(data,"utf8");

// 标记文件结尾
wstream.end();

// 处理流事件
wstream.on("finish",function () {
    console.log("写入完成");
});

wstream.on("error",function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");