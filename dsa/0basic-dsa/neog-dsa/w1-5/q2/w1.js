const convertStringIntoUpperCase = str => {
  let upperCase = ''
  for (const value of str) {
    let asciiValue = value.charCodeAt(0)
    if (asciiValue >= 97 && asciiValue <= 122) {
      asciiValue -= 32
    }
    upperCase += String.fromCharCode(asciiValue)
  }
  return upperCase
}
console.log(convertStringIntoUpperCase('me its A 934'))
