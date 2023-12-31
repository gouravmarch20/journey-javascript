// tell a character is  vowel or consonent
const string = 'hii i am looking cagr 49'
const findVowelOrNot = char => {
  let charLowerCase = char.toLowerCase()
  if (
    charLowerCase === 'a' ||
    charLowerCase === 'e' ||
    charLowerCase === 'i' ||
    charLowerCase === 'o' ||
    charLowerCase === 'u'
  ) {
    console.log('vower')
  } else {
    console.log('not')
  }
}
findVowelOrNot('a')
