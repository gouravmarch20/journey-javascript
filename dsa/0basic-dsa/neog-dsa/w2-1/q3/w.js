const removeAllSpace = str => {
  let result = ''
  for (let value of str) {
    if (value === ' ') {
      continue
    }
    result += value
  }
  return result
}

console.log(removeAllSpace('       We are     neoGrammers   '))
