// pichle hi code me agar kasturi ki age rukna band ho jay to ..... means hum ek kam karte age peremeter ko readonly kr dete jitte further hum age ko change nahi kar paynge

const person: { firstName: string; lastName:string; readonly age:number } = {
    firstName:"Kasturi",
    lastName:"Pawde",
    age:18
}
console.log(person)

/* person.age += 1 */
// cant do this now as age is readonly