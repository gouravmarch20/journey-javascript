const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
const s2 = { d: 42 }
//? in arg1 :: it concat all arg2 , 3 etc object
//? also return new the new value for of arg1 object
const returnedTarget = Object.assign(target, source, s2)

console.log(returnedTarget === target)
console.log(target)
console.log(source)
