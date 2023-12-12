// to knew is given var is array or not ==> typeof tell array as object datatype  
//! an proto method  
//? return boolean

const arr = [3 , 54]
const number = 434 ;
const string = "gourav"
console.log(typeof arr);// ! issue 
console.log(typeof string);
console.log(Array.isArray(arr))
console.log(Array.isArray(number))
console.log(Array.isArray(string))