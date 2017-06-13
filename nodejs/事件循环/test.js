/**
 * Created by love&crazy on 2017/6/13.
 */
var event = require("events");

var emitter = new event.EventEmitter();

// listener01
var listener01 = function listener01() {
    console.log("listener01 正在执行");
}

// listener02
var listener02 = function listener02() {
    console.log("listener02 正在执行");
}

// 绑定listener01
emitter.on("connect",listener01);

// 绑定listener02
emitter.addListener("connect",listener02);

// 打印已绑定的监听器数量
var count = new require("events").EventEmitter.listenerCount(emitter,"connect");
console.log(count + " 监听器连接事件");

// 触发connect事件
emitter.emit("connect");

// 移除监听器01
emitter.removeListener("connect",listener02);
console.log("listener02 已移除");

// 再次触发事件
emitter.emit("connect");

// 打印已绑定的监听器数量
var count = new require("events").EventEmitter.listenerCount(emitter,"connect");
console.log(count + " 监听器连接事件");

console.log("程序执行完毕");