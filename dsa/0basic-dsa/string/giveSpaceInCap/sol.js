const isUpperCase = (char) => {
  if (char == char.toLowerCase()) {
    return false
  }
  return true
}
const giveSpace = (str) => {
  let ans = ""
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && isUpperCase(str[i])) {
      ans += " "
    }
    ans += str[i]
  }
  return ans
}
console.log(giveSpace("MyNameIsGohTan"))
