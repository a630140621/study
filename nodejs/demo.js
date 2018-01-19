/**
 * Created by love&crazy on 2017/6/14.
 */
"use strict";

let book = {
	name:"javascript",
	title:"title",
	age:21,
	toJSON:function () {
		return 'do not';
	}
}

let book2 = {
	name:'java',
	book:book
};

// console.log(JSON.stringify(book,null,4));

console.log(JSON.stringify(book2,null,4))