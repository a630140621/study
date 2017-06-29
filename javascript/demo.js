/**
 * Created by wxy on 2017/6/28.
 */
'use strict';

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(o[key]); // 'name', 'age', 'city'
    }
}