//similar to search but return value in array form 
//  using regex it return new Array whree store all same string value
const str = 'javascript is great LANGUAGE use is is'
console.log(str.match(/is/g))
console.log(str.match(/LANGUAGE/g))
console.log(str.match(/language/g))
// console.log(str.match(/language/i))
