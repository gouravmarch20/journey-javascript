const input = str => {
  let resultStr = ''
  const strArr = str.split(' ')
  for (const value of strArr) {

    resultStr += value.slice(0, 1)
  }
  console.log(resultStr)
}
input('Emperor Bahadur Shah Zafar')
