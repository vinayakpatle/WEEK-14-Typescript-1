"use strict";
function factorial(x) {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1);
}
const result = factorial(5);
console.log(`factorial of 5 is ${result}`);
function divide(number) {
}
