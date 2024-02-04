const copySmallerStringToBigger = (str1, str2) => {
  let copiedStr = ''
  if (str2.length > str1.length) {
    return str2.concat(str1)
  } else {
    return str1.concat(str2)
  }
}
console.log(copySmallerStringToBigger('smaller', 'bigger String'))
