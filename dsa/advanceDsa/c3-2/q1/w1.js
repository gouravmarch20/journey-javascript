// l1 : () --> number able to concat with string as string else STRING keyword be also use to fix this issue
const inputSentence = 'You should know about accessibility and javascript'

const abbreviateMe = word =>
  word[0] + (word.length - 2) + word[word.length - 1]

const abbreviatedSentence = inputSentence
  .split(' ')
  .map(word => (word.length < 5 ? word : abbreviateMe(word))).join(" ")

console.log(abbreviatedSentence)
