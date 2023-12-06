// ! array vs set

/*
set : 
 - always contain unique value in array form
 - it's datatype is object & it is not an array 
 - to convert it into array we use ===>  [..]
** we use to get unique value in array

*/

const array = [1, 4, 2, 1, 1, 1, 3, 2, 4]
console.log(new Set(array))
console.log(Array.isArray(new Set()))
console.log(Array.isArray([...new Set()]))// ! changing set datatype into array by using spred & []  
