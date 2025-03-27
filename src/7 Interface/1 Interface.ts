// In TypeScript, an interface is a way to define a contract for a specific shape of an object. It defines the properties and methods that an object should have in order to be considered compatible with that interface.

import { Interface } from "readline";

interface person{
    readonly name : string,
    lastName: string;
    age?: number;
}

// To use this interface  :->
let person1 : person = {
    name : "Pratyush",
    lastName: "Chouksey",
    age: 18,
}

let person2 : person = {
    name : "Kasturi",
    lastName: "Pawde",
}

console.log(person1.name)
console.log(person1.lastName)
console.log(person1.age)
console.log(person2.name)
console.log(person2.lastName)
console.log(person2.age)


// Thats not it we can use interface in function and objects (OOPs) too 
// To show this lets Move to the next file
