/**
 * Created by wxy on 2017/6/20.
 */
function person(first,last,age,sex) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.sex = sex;
}

person.prototype.greeting = function () {
    console.log('我是person的方法');
}

module.exports = person;