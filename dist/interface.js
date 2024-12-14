"use strict";
function isLegal2(user2) {
    if (user2.age > 18) {
        console.log(`${user2.firstName} is legal to vote`);
    }
    else {
        console.log(`${user2.firstName} is not legal to vote`);
    }
}
let user2 = {
    firstName: "Vinayak",
    lastName: "patle",
    age: 8
};
isLegal2(user2);
