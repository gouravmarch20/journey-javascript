// convert to number
let a = '33'
console.log(typeof Number(a))
console.log(typeof Number(true))


// isInteger => tell number of not ==> return boolean
console.log(Number.isInteger('jj'))
console.log(Number.isInteger(43))

// toFixed : no of decimal digits we want
console.log(b.toFixed(7))
// toPrecision : round of value return ==> how many digit
a = 5.57
console.log(a.toPrecision(1))
console.log(a.toPrecision(2))
console.log(a.toPrecision(4))
