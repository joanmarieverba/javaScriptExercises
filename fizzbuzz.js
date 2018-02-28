"use strict"

const fizzBuzz = function () {
    for (let i=0; i<101; i++){
        if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }

}

fizzBuzz ();
