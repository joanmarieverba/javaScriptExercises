"use strict"
//function declaration
// function modulus (params) {
// }


const example = 'an example'
//function expression  (gets hoisted to the top, so you can use modulus2 before it's defined)
const isEven = function(param) {
    const result = param % 2 === 0;
 //   console.log(result);
    return result;
}
//invoke function
const wellIsIt = isEven(10);
// console.log(wellIsIt);

function adder (a, b) {
    const sum = a + b;
    return sum;
// could also write return a + b;
}

const mysum = adder(3, 6);
// console.log (mysum);

const subtracter = function (a, b) {
    return a - b;
}

const difference = subtracter (3, 2);
//  console.log (difference);
//this is preferable to console.log (subtracter(3,2));
// console.log(subtracter)  just outputs what the function is

const mathTeacher = {
    name: "Joan",
    good: false,
    adder: function (a, b) {
        const sum = a + b;
        return sum;
    age: 64,
    experience: 12,
    }
// could also write return a + b;
}
}
//access name property of object mathTeacher
//console.log(mathTeacher.name);
console.log(mathTeacher.adder(1,2));

const started = mathTeacher.substrater(mathTeacher.age, mathTeacher.experience);
console.log(`${mathTeacher.name} started teaching when he was ${started}`);

