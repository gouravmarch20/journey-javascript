// limit no of decimal ,  return string datatype
// ? If on a same time we perform opertion in it's return value ===> typecase automatically
const num1 = 2.7823291
console.log(typeof (3 * (2.7823291).toFixed(2)))
console.log(typeof (2.7823291).toFixed(2)) //? AUTO TYPE => Number * String
console.log(typeof num1.toFixed(2)) ////! convert datatype
console.log(Number(num1.toFixed(2)))
