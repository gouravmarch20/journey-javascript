const abbereviateStr = str => {
  let abbStr = ''
  if (str.length < 5) {
    return str
  } else {
    abbStr += str[0]
    for (var i = 0; i < str.length; i++) {}
    abbStr += i - 2
    abbStr += str[str.length - 1]
    return abbStr
  }
}

const input = str => {
  let returnStr = ''
  const arrStr = str.split(' ')
  for (let i = 0; i < arrStr.length; i++) {
    returnStr += abbereviateStr(arrStr[i])
    returnStr += ' '
  }
  return returnStr
}

console.log(input('You should know about accessibility and javascript'))

// Your Output should be:
;('You s4d know about a11y and j8t')
// for understanding: there are 11 characters between 'a' and 'y' in accessibility
