const str = 'hello world i am'
const removeDuplicate = word => {
  let nonDuplicatesSentence = ''
  for (const value of word) {
    if (!nonDuplicatesSentence.includes(value)) {
      nonDuplicatesSentence = nonDuplicatesSentence + value
    }
  }

  return nonDuplicatesSentence
}

console.log(removeDuplicate(str))
