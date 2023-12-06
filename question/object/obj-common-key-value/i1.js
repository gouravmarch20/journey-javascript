//

const input1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 10,
  e: 12
}
const input2 = {
  a: 2,
  c: 3,
  x: 11,
  e: 12
}
//* o/p ===>  { c: 3 , e : 12 }

const getCommonKeyValue = (obj1, obj2) => {
  const uniqueValues = {}
  for (const key in obj1) {
    if (obj2[key] === obj1[key]) {
      uniqueValues[key] = obj1[key]
    }
  }
  return uniqueValues
}

console.log(getCommonKeyValue(input1, input2))
