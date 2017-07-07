/**
 * Created by love&crazy on 2017/7/2.
 */
'use strict';

var promise = new Promise(function (resolve,reject) {
    console.log('1');
    setTimeout(()=>{console.log('1');resolve();},1000);
    throw new Error('err');
});

promise.then(setTimeout(()=>{console.log('2');},1000)).then(()=>console.log('3')).catch((err)=>console.log('err'));
