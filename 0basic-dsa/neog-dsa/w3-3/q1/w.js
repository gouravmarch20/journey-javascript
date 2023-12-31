obj = {
  name: 'Doraemon',
  age: 5,
  hairColor: 'none',
  eyes: 'oval'
}
const inverseObj = obj => {
  let reverseObj = {}
  for (const [key, value] of Object.entries(obj)) {
    reverseObj[value] = key
  }
  return reverseObj
}
console.log(inverseObj(obj))
