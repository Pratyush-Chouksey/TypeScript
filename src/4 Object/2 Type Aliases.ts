// To reduce the task by not writing the type of each element in object all time we can same write it once using type and use it several times

type User = {
    firstName:string,
    lastName:string,
    age:number
}

const printUserinfo = (user:User) => {
    return `Hi ${user.firstName} ${user.lastName} your age must be ${user.age}.. Right ?`
}

let user1 = printUserinfo({firstName:"Pratyush",lastName:"Chouksey",age:18})
let user2 = printUserinfo({firstName:"Pratyush",lastName:"Parida",age:18})
let user3 = printUserinfo({firstName:"Joshit",lastName:"Dutta",age:18})

console.log(user1)
console.log(user2)
console.log(user3)

