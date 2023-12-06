//!  miss space case
const getUpperCase = letter => {
  const asciiValue = letter.charCodeAt()
  let finalAscii = asciiValue
  if (asciiValue >= 97 && asciiValue <= 122) {
    finalAscii -= 32
  }
  return String.fromCharCode(finalAscii)
}

const getSentenceCase = sentence => {
  let transformedWord = ''
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) {
      transformedWord += getUpperCase(sentence[i])
    } else if (sentence[i] === ' ') {
   

      transformedWord += getUpperCase(sentence[i + 1])
      i++
    } else {
      transformedWord += sentence[i]
    }
  }
  console.log(transformedWord)
}

console.log(getSentenceCase('neoGrammers will afkl'))
