const countNumberOfCharacter = sentence => {
  let count = 0
  trimSentence = sentence
  for (let i = 0; trimSentence[i] !== undefined; i++) {
    if (trimSentence[i] !== ' ') {
      count++
    }
  }
  return count
}
console.log(countNumberOfCharacter('        We are neoGrammers     '))
