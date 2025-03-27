//In TypeScript, a tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

let myTuple : [string,number] = ["hello",42];
/*  let myTuple1 : [string,number] = [42,"hello"]; */ // Error

console.log(myTuple[0]) //"hello"
console.log(myTuple[1]) //42

// Destructuring :->
let [first,second] = myTuple
console.log(first) //"hello"
console.log(second) //42
