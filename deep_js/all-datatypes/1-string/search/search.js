// like include but return  index & we can also apply regex   

// -1 if not found 
const str = "alpha is the mostly"
console.log(str.search("is"))
console.log(str.search("ilike"))
console.log(str.search("mos"))
// ! regex TODO:
const regex = 'zihello stack 8 , welcome 3 '
console.log(regex.search(/[1-9]/))// is any no 1 to to 9 
