"use strict";
const team = {
    name: "Vianayak",
    age: 17,
    department: "softwere development"
};
function voting(user) {
    if (user.age > 18) {
        console.log(`${user.name} is eligible to do vote`);
    }
    else {
        console.log(`${user.name} is not eligible to do vote`);
    }
}
voting(team);
