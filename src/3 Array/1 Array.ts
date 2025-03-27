// In Typescript you can specify which type of data should be there in the arry like (string or number or boolean)
// Their are two ways to creat Array in typesript :-

// 1. [] Notation
const num : number[] =[1,2,3,4,5]
console.log(num)  

// 2. Array<type> Notation
const name : Array<string> = 
["Pratyush","Parida","joshit","Bajpai","Rudraksh","Krishna"]
console.log(name)

// const name1 : Array<string> = 
// ["Pratyush","Parida",8,true]
// This will give error as we cannot append num or boolean data type elements in string type array