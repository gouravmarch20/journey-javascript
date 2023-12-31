//copying at any desired position of the bigger string
const copySmallerStringToBigger = (str1, str2, pos) => {
  let result = ''
  let preString = ''
  let postString = ''
  if (str1.length >= str2.length) {
    //str1 is bigger
    if (pos <= str1.length) {
      preString = str1.slice(0, pos)
      console.log(preString)
      postString = str1.slice(pos)
      result = preString + str2 + postString
    } else {
      result = str1 + str2
    }
  } else {
    //str1 is smaller
    if (pos <= str2.length) {
      preString = str2.slice(0, pos)
      postString = str2.slice(pos)
      result = preString + str1 + postString
    } else {
      result = str2 + str1
    }
  }
  return result
}
console.log(copySmallerStringToBigger('99', 'QuestionOfTheDay', 784))
