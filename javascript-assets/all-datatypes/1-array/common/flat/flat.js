//
// nested array flat
// return new array , not modify in real value , to do more nested array apply in return flat array
const number = [1, [5, 6], 7, [8, [9, 10]]]
console.log(number)
const flatLevelOne = number.flat()
console.log(flatLevelOne)

const flatLevelTwo = flatLevelOne.flat()
console.log(flatLevelTwo)
console.log(number)
