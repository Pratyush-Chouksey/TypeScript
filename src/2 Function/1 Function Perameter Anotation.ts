// Regular Function 

function negetion (num: boolean) {
    if (num==true) {
        return false
    } else {
        return true
    }
}
let ans1 = negetion(true)
console.log(ans1)


// Arrow Function 

const multiply = (x: number, y:number) => {
    return x*y;
}
let ans2 = multiply(2,5)
console.log(ans2)

/* let ans3 = multiply(2,4,7)*/ 
//this will throw an error as we can only give three peremeters to function multiply
/* let ans3 = multiply(2) */  
// This too will throw an error

// If no type given 

// const add = (p,q) => p+q
// let ans4 = add(jde,kdnj)
// console.log(ans4) 
/* This will throw an error */

