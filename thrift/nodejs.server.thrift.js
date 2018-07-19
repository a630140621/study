'use strict';

const thrift = require('thrift');
const ttypes = require('./gen-nodejs/helloworld_types');
const HelloWorldService = require('./gen-nodejs/HelloWorldService');


let server = thrift.createServer(HelloWorldService, {
    ping: function () {
        console.log('123');
        return;
    },

    echoSomeThing: function (demo, name) {
        console.log(demo, name);
        return 'success';
    }
})


server.listen(9412, () => {
    console.log('listen port 9412 success');
})