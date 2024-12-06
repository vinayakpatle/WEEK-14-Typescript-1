"use strict";
function delayedCall(callback) {
    setTimeout(callback, 1000);
}
function callback(age) {
    console.log("It will run after 1 second");
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
delayedCall(callback);
