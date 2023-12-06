// spread , map used in array
const array = [1, 4, 5, 6, 7]

function pureF (arr) {
  const newArray = [...arr]
  newArray.pop()
  newArray.pop()
  return newArray
}
function pureFone (arr) {
  return arr.map(item => item * 2)
}
console.log(pureF(array))
console.log(pureFone(array))
console.log('remain same ', array)
