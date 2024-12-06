function factorial(x: number): number{
    if(x==0){
        return 1;
    }

    return x*factorial(x-1);
}

const result=factorial(5);
console.log(`factorial of 5 is ${result}`);