/**
 * Created by wxy on 2017/6/20.
 */
var person = require('./person');
var teacher = require('./teacher');

var lh = new person('liu','han',22,'男');

lh.greeting();

var han =new teacher('liu','han',22,'男','en');
han.greeting();