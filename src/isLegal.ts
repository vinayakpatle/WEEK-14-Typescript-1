function isLegal(age: number): boolean{ // type inferencing
    if(age>18){
        return true;
    }else{
        return false
    }
}

const ans2=isLegal(20);
console.log(ans2);