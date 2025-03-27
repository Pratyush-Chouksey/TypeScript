type Person = {
    name: string;
    lastName: string
}
type Employee = {
    id: number;
    title: string
}
type PersonAndEmployee = Person & Employee

let p1:PersonAndEmployee = {
    name:"Pratyush",
    lastName:"Chouksey",
    id: 2400100349 ,
    title: "Intern"
}
console.log(p1)