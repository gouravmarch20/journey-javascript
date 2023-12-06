// not include last index
const str = 'annoumsfunction'
console.log(str.substring(0, 5))
console.log(str.substring(3))
console.log(str.substring(str.length - 3)) // ! to get last 3 char
console.log(str.substring( -3))//  ** NOT WORK LIKE slice , give form 0 to end 
