type stringOrNumber= string | number;

function sumFind(a: stringOrNumber, b: stringOrNumber){
    return a.toString() + b.toString();
}

let as=sumFind("add to string ",5);
console.log(as);



