/**
 * Created by love&crazy on 2017/6/18.
 */
var fs = require('fs');

var rs = fs.createReadStream('../file/input.txt','utf-8');
var ws = fs.createWriteStream('./output.txt','utf-8');

rs.pipe(ws);