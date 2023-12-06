const str = 'hello   world ia'
//TODO: 
const revSentence = s => {
  let str = ''
  for (let i = s.length - 1; i >= 0; i--) {
    const element = s[i]
    str += element
  }
  return str
}
const revWord = w => {
  let newW = ''
  for (let i = w.length - 1; i >= 0; i--) {
    const element = w[i]
    newW += element
  }
  return newW
}
const reverseWords = s => {
  let tempStr = ''
  let left = 0
  let right = 0
  for (let i = 0; left < s.length; i++) {
    if (s[i] !== ' ') {
      tempStr += s[i]
      right++
    } 
    if(s[i] === ' '){

    }
  }
}
console.log(reverseWords(str))
