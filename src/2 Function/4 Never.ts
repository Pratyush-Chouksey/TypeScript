// Where to use never :-

// 1. A function that always throws an error
function throwError (msg:string) :never {
    throw new Error(msg);
}

// 2. A function that has an infinite loop
function infiniteLoop(): never {
    while (true) {}
}

// 3. A variable that can never have a value
let x:never;
function neverReturns(): never {
    while (true) {}
}
x = neverReturns();