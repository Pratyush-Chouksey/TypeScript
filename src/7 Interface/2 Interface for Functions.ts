// How to creat an Interface for Function

interface MathOperations {
    (x:number,y:number) : number;
}

function addition (a:number,b:number) : number {
    return a+b
}
let ans1 = addition(1,6)
console.log(ans1)
// We dont have to do this much repetedly as we can simply give the type as out interface and make as many function as we want
// eg :-

const sub :MathOperations = (a,b) => a-b //thats it !
// it will automatically take paramates as number and return the value in type = number as we have given the type of our interface to the functioon
console.log(sub(5,2))
