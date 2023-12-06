const convertStringIntoUpperCase = str => {
  let upperCase = ''
  for (const value of str) {
    const asciiValue = value.charCodeAt(0)
    if (asciiValue >= 97 && asciiValue <= 122) {
      const temp = String.fromCharCode(asciiValue - 32)
      upperCase += temp
      continue
    }
    upperCase += value
  }
  return upperCase
}
console.log(convertStringIntoUpperCase('me its A123'))
