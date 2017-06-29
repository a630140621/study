/**
 * Created by love&crazy on 2017/6/14.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);