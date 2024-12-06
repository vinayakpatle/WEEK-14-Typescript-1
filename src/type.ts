
function greet(user:{
    firstName:string,
    age:number
}){
    console.log("Hi there "+user.firstName);
}

let user={
    firstName:"Vinayak patle",
    age:20
}

greet(user);