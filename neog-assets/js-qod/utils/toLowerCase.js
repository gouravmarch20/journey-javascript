const transformLowerCase = str => {
  let allLowerCase = ''
  for (const value of str) {
    let asciiValue = value.charCodeAt(0)
    if (asciiValue >= 65 && asciiValue <= 90) {
      temp = asciiValue + 32

      allLowerCase += String.fromCharCode(temp)
      continue
    }
    allLowerCase += value
  }
  return allLowerCase
}

console.log(transformLowerCase('AD noeg ALPHA'))
