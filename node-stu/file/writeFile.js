/**
 * Created by love&crazy on 2017/6/17.
 */
var fs = require('fs');

fs.readFile('input.txt','utf-8',function (err,data) {
    if (err){
        console.log(err);
    }else{
        fs.writeFile('output.txt',data,'utf-8',function (err) {
            if(err){
                console.log(err);
            }else{
                console.log('将input.txt内容写入output.txt成功');
            }
        });
    }
});

console.log('程序结束');