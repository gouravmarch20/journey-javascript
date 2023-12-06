const replaceChar = (str, replaceThis, replaceWith) => {
  let replacedChar = ''
  for (const letter of str) {
    if (letter === replaceThis) {
      replacedChar += replaceWith
      continue
    }
    replacedChar += letter
  }
  return replacedChar
}
console.log(replaceChar('aeio aeoi oo ', 'o', 'e'))
