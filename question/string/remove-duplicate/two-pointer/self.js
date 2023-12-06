const str = 'hello world i am'
const replace = (sentence, addChar, wp) => {
  return sentence.slice(0, wp) + addChar + sentence.slice(wp + 1)
}
const removeDuplicate = sentence => {
  let newSentence = sentence
  const set = new Set()
  let wp = 0
  let rp = 0
  for (let i = 0; i < sentence.length; i++) {
    if (!set.has(sentence[i])) {
      set.add(sentence[i])
      newSentence = replace(newSentence, sentence[i], wp)
      wp++
    } 
    rp++
  }
  return newSentence.slice(0, wp)
}

console.log(removeDuplicate(str))
