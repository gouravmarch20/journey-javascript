const replaceChar = (str, replaceThis, replaceWith) => {
  let replacedChar = ''
  for (let letter of str) {
    if (letter === replaceThis) {
      letter = replaceWith
    }
    replacedChar += letter
  }
  return replacedChar
}
console.log(replaceChar('aeio aeoi oo ', 'o', 'e'))
