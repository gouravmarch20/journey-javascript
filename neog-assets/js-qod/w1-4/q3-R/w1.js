
const reverseCharactersOfWord = str => {
  let reverseStr = ''
  let temp = ''
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      
      reverseStr = ' ' + temp + reverseStr
      temp = ''
    } else {
      temp = temp + str[i]
    }
  }
  reverseStr = temp + reverseStr

  return reverseStr
}
console.log(reverseCharactersOfWord('   we are    afs'))
