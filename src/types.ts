type userType2={
    firstname:string,
    lastname:string,
    age:number,
}
// type also allow you to do union and intersection

function greeting(user22:userType2){
    if(user22.age>18){
        console.log(`Hello mister ${user22.firstname}`);
    }else{
        console.log(`${user22.firstname} your not elligible to look here`);
    }
}

let user22: userType2={
    firstname:"vinayak",
    lastname:"patle",
    age:20
}

greeting(user22);