// forgot i-- use
const lengthOfLastWord = str => {
  let lastWord = ''
  for (let i = str.length - 1; str[i] !== ' '; i--) {
    lastWord += str[i]
  }
  return lastWord.length
}
console.log(lengthOfLastWord('ello neoGrammers you guys rock'))
