"use strict";
// type also allow you to do union and intersection
function greeting(user22) {
    if (user22.age > 18) {
        console.log(`Hello mister ${user22.firstname}`);
    }
    else {
        console.log(`${user22.firstname} your not elligible to look here`);
    }
}
let user22 = {
    firstname: "vinayak",
    lastname: "patle",
    age: 20
};
greeting(user22);
