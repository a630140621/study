/**
 * Created by love&crazy on 2017/6/14.
 */
'use strict';

const crypto = require('crypto');

console.log(crypto.createHash('md5').update('http://finance.youth.cn/finance_gdxw/201707/t20170728_10396684.htm').digest('hex'));
