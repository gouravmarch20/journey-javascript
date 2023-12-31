/**
 * @param {string} s
 * @return {boolean}
 */
const makeRequiredString = (str) => {
  let tempStr = ""

  for (const val of str) {
    //   const asciiVal = val.charCodeAt(0)
    //   console.log(asciiVal)

    //  lower case
    if (val >= "a" && val <= "z") {
      tempStr += val
    } else if (val >= "A" && val <= "Z") {
      tempStr += val.toLowerCase()
    } else if (val >= "0" && val <= "9") {
      tempStr += val.toLowerCase()
    }
  }
  return tempStr
}
const isReqStrPalindrome = (str) => {
  let j = str.length - 1
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === str[j]) {
      j--
    } else {
      return false
    }
  }
  return true
}
var isPalindrome = function (s) {
  const reqStr = makeRequiredString(s)
  return isReqStrPalindrome(reqStr)
}
