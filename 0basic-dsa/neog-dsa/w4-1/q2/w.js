// fail >>     if (iterator == ('a' || 'e' ||   'o' || 'i') {

const getVowelReverse = (count, string) => {
  //   console.log(string[string.length - count - 1])
  return string[string.length - count - 1]
}
const reverseVowelsInAString = string => {
  let vowelReverseString = ''
  let vowelString = ''
  let count = 0
  for (const iterator of string) {
    switch (iterator) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelString += iterator
      //   default:
      //     break
    }
  }

  for (let iterator of string) {
    switch (iterator) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        iterator = getVowelReverse(count, vowelString)
        count++

      default:
        vowelReverseString += iterator
    }
  }
  console.log(vowelReverseString)
}
console.log(reverseVowelsInAString(`neoGCamp al`))
