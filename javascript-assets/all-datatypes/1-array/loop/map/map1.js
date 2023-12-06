// ? map : itterate whole array and store each data in array form  ==> after itteration complete it return the array data

const arr = [6, 55, 33]

// callback function
const binary = (arr) => arr * 2

// map high order function
const output = arr.map(i => binary(i))
console.log(output)