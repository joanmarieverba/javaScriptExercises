"use strict";

// const name = 'Joan';
// let happy = true;
// let age = 64;
// const hairColor = 'brown';

// const joanArray = [name, happy, age, hairColor];

// console.log(typeof name, name);
// console.log(typeof happy, happy);

// happy = false;
// console.log(typeof happy, happy);
// console.log(typeof age, age);

// if (joanArray[1] ===  true){
//     console.log(Array.isArray(joanArray), joanArray[3]);
// }

// for (let i = 0; i < 10; i++){
//     console.log (i);
// }


// for (let i = 0; i < joanArray.length; i++) {
//     console.log(joanArray[i]);
// }

const joan = {
    name: 'Joan',
    age: 64,
    happy: true,
    hairColor: 'brown'
}

const Bill = {
    name: 'Bill',
    age: 24,
    happy: false,
    hairColor: 'black'
}

const Esteban = {
    name: 'Esteban',
    age: 24,
    happy: true,
    hairColor: 'black'
}

 const studentArray = [joan, Bill, Esteban];

// console.log (studentArray);

// for (let i = 0; i < studentArray.length; i++){
//     console.log(studentArray[i]);
// }

for (let i = 0; i < studentArray.length; i++) {
    console.log(`Hello ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${studentArray[i].happy ? 'happy' : 'unhappy'}?`);
}


// ${ studentArray[i].happy ? 'happy' : 'unhappy' }
// is the same as.....
// if (joan.happy){
//     return 'happy';
// } else {
//     return 'unhappy';
// }