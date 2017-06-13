/**
 * Created by love&crazy on 2017/6/13.
 */
var event = require("events");

var eventEmitter = new event.EventEmitter();

// 加入事件和函数
eventEmitter.on("some_event",function () {
    console.log("事件被触发");
});

// 1s后触发事件
setTimeout(function () {
    eventEmitter.emit("some_event");
},1000);