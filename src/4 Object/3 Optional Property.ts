// Pichle topic ke hi code me let's suppose koi ladki ne form bhar diya to ladkiya to waise bhi age nahi batati to lets suppose usne age na bhari fir bhi ye code ko work karne ke liye use property (age) ko ? laga ke optional banana hoga

const person: { firstName: string; lastName:string; age?:number } = {
    firstName:"Kasturi",
    lastName:"Pawde",
}
console.log(person)