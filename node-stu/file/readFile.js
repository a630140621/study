/**
 * Created by love&crazy on 2017/6/17.
 */
'use strict'
var fs = require("fs");

fs.readFile("input.txt",'utf-8',function (err,data) {
    if (err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});