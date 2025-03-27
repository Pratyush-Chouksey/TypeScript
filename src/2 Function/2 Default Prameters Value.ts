function greet (person: string = "Anonymous") {
    return `Hellow ${person}`
}

let withoutPerson = greet();
console.log(withoutPerson)

let withPerson = greet("Pratyush"); // it will take the default value of perameter that is anonymous
console.log(withPerson)