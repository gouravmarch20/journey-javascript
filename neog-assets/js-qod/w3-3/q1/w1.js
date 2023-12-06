obj = {
  name: 'Doraemon',
  age: 5,
  hairColor: 'none',
  eyes: 'oval'
}

const inverseObj = obj => {
  const reverseObj = {}
  for (const key in obj) {
    reverseObj[obj[key]] = key
  }
  return reverseObj
}
console.log(inverseObj(obj))
