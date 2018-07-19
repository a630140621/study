'use strict'

let N = 10, i = 2, sum = 2;

while (i <= N){debugger
	if (i % 2 !== 0){
		sum += i;
	}
	i++;
}

console.log(sum)