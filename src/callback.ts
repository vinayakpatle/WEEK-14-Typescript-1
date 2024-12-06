
function delayedCall(callback: (age: number)=>boolean){
    setTimeout(callback,1000);
}

function callback(age: number){
    console.log("It will run after 1 second");
    if(age>18){
        return true;
    }else{
        return false;
    }
}

delayedCall(callback);