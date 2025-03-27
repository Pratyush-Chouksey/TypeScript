interface Person {
    name : string,
    lastName : string,
    age : number
    sayHey() : void;
}

const sayHey = () => {
    console.log("Hey !")
}
function greet (person:Person) {
    person.sayHey();
    console.log(`Is it ${person.name} ${person.lastName} with age : ${person.age}`)
}

let person1 : Person = {
    name : "Pratyush",
    lastName : "Chouksey",
    age : 18,
    sayHey
}

let person2 : Person = {
    name : "Pratyush",
    lastName : "Parida",
    age : 18,
    sayHey
}

greet(person1);
greet(person2);
