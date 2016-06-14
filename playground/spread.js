/*eslint-disable*/
// function add (a,b) {
// 	return a+b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Daniel', 'Matt'];
// var groupB = ['Peter', 'Kathryn'];
// var final = [...groupA, ...groupB];

// console.log(final);

var person = ['Daniel', 23];
var personTwo = ['Darin', 38];

function hi(name, age) {
	console.log(`Hi, ${name}! You are ${age} years old.`);
}

hi(...person);
hi(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Daniel', ...names];

final.forEach((name) => console.log(`Hey, ${name}!`));