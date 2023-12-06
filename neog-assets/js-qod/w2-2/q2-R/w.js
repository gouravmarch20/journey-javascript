// m1 : str[str.length - 1 - i] ==> forgot str[] wrapper
// m2: forgot (str.length /2) case 
const isPalindrome = str => {
  //   console.log(str.length)
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
console.log(isPalindrome('123A321'))
