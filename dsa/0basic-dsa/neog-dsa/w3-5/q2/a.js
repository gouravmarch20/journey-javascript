const occurAtlesthalf = arr => {
  const obj = {}
  for (const iterator of arr) {
    // hasOwnProperty
    obj.hasOwnProperty(iterator) ? obj[iterator]++ : (obj[iterator] = 1)
  }
  for (const [key, value] of Object.entries(obj)) {
    console.log(value)
    if (value >= arr.length / 2) {
      return key
    }
  }
  return -1
}
console.log(occurAtlesthalf([2, 3, 2, 2, 32, 3]))
