// 3 space but 4 word
// += : add left to right --> this approch fail --> if itteration start from start of string
const reverseWord = str => {
  let result = ''
  let tempWord = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      tempWord += str[i]
    } else {
      result += tempWord
      tempWord = ''
    }
  }
  console.log(result)
}

console.log(reverseWord('Welcome        to            neog Camp'))
