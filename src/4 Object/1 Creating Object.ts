const person: { firstName: string; lastName:string; age:number } = {
    firstName:"Pratyush",
    lastName:"Chouksey",
    age:18
}
console.log(person)

// There is none more way to do it and that is by making a function that return an object

function person2() : {firstName: string; lastName:string; age:number } {
    return {
        firstName:"Joshit",
        lastName:"Dutta",
        age:18
    }
}
let p = person2();
console.log(p)