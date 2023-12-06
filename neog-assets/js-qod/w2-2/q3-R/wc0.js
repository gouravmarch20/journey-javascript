// if itteration start from last --> word got fail due to +=
const reverseWord = str => {

  let revWord = ''
  let tempWord = ''
  for (let i = str.length - 1; i >= 0; i--) {
    tempWord += str[i]
    if (str[i] === ' ') {
      tempWord += str[i]
      revWord += tempWord
      tempWord = ''
      continue
    }
  }
  revWord += tempWord
}

console.log(reverseWord('Welcome to neog Camp'))
