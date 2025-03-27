let password: string | number = 20;
// this means the password variable can be number or string

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  first: "Pratyush",
  last: "Chouksey",
  age: 18,
};

console.log(user);

const items: (number | string)[] = [1, 3, "hello"];
console.log(items);

const fn = (x :number|string)=>{
    return x
}
let ans = fn("helllow");
console.log(ans)