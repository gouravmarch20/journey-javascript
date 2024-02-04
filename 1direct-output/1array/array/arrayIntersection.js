const arr = [1, 2, 2, 1 , 3 ,5]
const arrOne = [2, 2, 5]
let interscectionArr = arrOne.filter(a => arr.includes(a))
console.log(...new Set(interscectionArr))
