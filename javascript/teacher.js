/**
 * Created by wxy on 2017/6/20.
 */
var person = require('./person');

function teacher(first,last,age,sex,subject) {
    // 继承内部定义的属性
    person.call(this,first,last,age,sex);

    this.subject = subject;
}

// 继承原型中的方法
teacher.prototype = Object.create(person.prototype);

// 复写和新增方法
teacher.prototype.greeting = function(){
    console.log('我是teacher的方法')
}

teacher.prototype.constructor = teacher;

module.exports = teacher;