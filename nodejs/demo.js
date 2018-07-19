<<<<<<< HEAD
'use strict'

let N = 10, i = 2, sum = 2;

while (i <= N){debugger
	if (i % 2 !== 0){
		sum += i;
	}
	i++;
}

console.log(sum)
=======
/**
 * Created by love&crazy on 2017/6/14.
 */
'use strict';

const crypto = require('crypto');

console.log(crypto.createHash('md5').update('http://finance.youth.cn/finance_gdxw/201707/t20170728_10396684.htm').digest('hex'));
>>>>>>> 848dbd2c6d048f37421c4ac8acf2965b13efc411
