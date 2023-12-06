const removeAllSpace = str => {
  let result = ''
  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] !== ' ') {
      result += str[i]
    }
  }
  return result
}
console.log(removeAllSpace('       We are     neoGrammers   '))
