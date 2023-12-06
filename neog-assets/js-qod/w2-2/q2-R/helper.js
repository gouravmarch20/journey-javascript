const checkPalindrome = string => {
  let i = 0,
    j = string.length - 1
  while (i < j) {
    if (string[i++] !== string[j--]) {
      return false
    }
  }
  return true
}

console.log(checkPalindrome('madam12madam'))
