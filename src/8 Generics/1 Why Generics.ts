// Without Generics :-> 
function printNumber(item: number, defaultValue:number) : [number,number]{
    return [item,defaultValue]
}
//har bar same chiz repete kr raha hu
function printString(item: string, defaultValue:string) : [string,string]{
    return [item,defaultValue]
}
//har bar same chiz repete kr raha hu
function printBoolean(item: boolean, defaultValue:boolean) : [boolean,boolean]{
    return [item,defaultValue]
}
let a = printNumber(1,2)
console.log(a)
let b = printString("Hi","Hello")
console.log(b)
let c = printBoolean(true,false)
console.log(c)

// Kitti zanjat karni padi ab next wale code me dekho kuch nahi karna padega cuz we will make ek ki generic function aur use he fir use karte rahenge


// ---------------------- Generic Function ------------------------// 

function genericFunction<Type> (item:Type,defaultValue:Type) : [Type,Type] {
    return [item,defaultValue]
}

let d = genericFunction<number>(1,2)
console.log(d)
let e = genericFunction<string>("Hi","Hello")
console.log(e)
let f = genericFunction<boolean>(true,false)
console.log(f)