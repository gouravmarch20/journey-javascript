const arrayLength = array => {
  let arrLength = 0
  for (let i = 0; array[i] !== undefined; i++) {
    arrLength++
  }
  return arrLength
}

console.log(arrayLength([1, 4, 5, 89, 4]))
