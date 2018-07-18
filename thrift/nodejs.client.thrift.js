'use strict';

const thrift = require('thrift');
const ttypes = require('./gen-nodejs/helloworld_types');
const HelloWorldService = require('./gen-nodejs/HelloWorldService');
const assert = require('assert');


let transport = thrift.TBufferedTransport;
let protocol = thrift.TBinaryProtocol;

let connection = thrift.createConnection("localhost", 9412, {
    transport: transport,
    protocol: protocol
});

connection.on('error', function (err) {
    assert(false, err);
});

// Create a Calculator client with the connection
let HelloWorldServiceClient = thrift.createClient(HelloWorldService, connection);


HelloWorldServiceClient.ping((err) => {
    console.log(err);
})


let sex = ttypes.Sex.FEMALE
let demo = new ttypes.Demo({id: 10, name: 'lh', sex: sex})

HelloWorldServiceClient.echoSomeThing(demo, 'lh', (value) => {
    console.log(value);
})