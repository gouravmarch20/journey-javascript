const str = 'hello world i am'
const replace = (sentence, character, index) => {
  return sentence.slice(0, index) + character + sentence.slice(index + 1)
}
const removeDuplicate = sentence => {
  let arraySet = new Set([])
  console.log(arraySet)
  let writePointer = 0
  let readPointer = 0
  for (let i = 0; i < sentence.length; i++) {
    if (!arraySet.has(sentence[readPointer])) {
      arraySet.add(sentence[readPointer])
      sentence = replace(sentence, sentence[readPointer], writePointer)
      writePointer++
    }
    readPointer++
  }
  return sentence.slice(0, writePointer)
}

console.log(removeDuplicate(str))
