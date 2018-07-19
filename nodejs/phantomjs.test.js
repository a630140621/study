'use strict';

const phantom = require('phantom');
const child_process = require('child_process');
const path = require('path');


// let phantomjs = child_process.spawn('./phantomjs/phantomjs-2.1.1-windows/bin/phantomjs.exe', [
//     '--load-images', 'false',
//     '--local-to-remote-url-access', 'true'
// ]);

let url = 'http://nodejs.cn/api/child_process.html#child_process_child_process_spawn_command_args_options';

phantom.create([], {
    phantomPath: './phantomjs/phantomjs-2.1.1-windows/bin/phantomjs.exe',
    logger: console,
    logLevel: 'debug',
}).then((phantomjs) => {
    debugger
    // phantomjs.exit();
    var page = require('webpage').create();
    page.open(url, function (status) {
        console.log("Status: " + status);
        if (status === "success") {
            console.log('success');            
        }
        phantomjs.exit();
    });
})