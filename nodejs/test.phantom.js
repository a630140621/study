'use strict'

const webPage = require('webpage').create();

let url = 'http://wx2.zhizao4s.com/htmlv2/newbackend/certificate_notify.html';

console.time('phantom');
webPage.open(url, (s) => {
    console.log(s);

    console.timeEnd('phantom');
    phantom.exit();
})