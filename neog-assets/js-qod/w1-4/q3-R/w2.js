// be cantiou line no : 4 ==> i >= 0
function getReverseWord (str) {
  let revWord = ''
  for (let i = str.length - 1; i >= 0; i--) {
    revWord += str[i]
  }

  return revWord
}
function reverseCharactersOfWord (str) {
  let reverseSentence = []
  const wordArr = str.split(' ')
  for (let i = 0; i < wordArr.length; i++) {
    reverseSentence.push(getReverseWord(wordArr[i]))
  }
  return reverseSentence.join(' ')
}

console.log(reverseCharactersOfWord('we are    afs'))
