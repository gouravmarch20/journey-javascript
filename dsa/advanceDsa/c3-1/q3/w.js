
const maskString = str => {
  concatStr = ''
  for (let i = 0; i < str.length / 2; i++) {
    concatStr += `${str[i]}`
  }
  return (concatStr += '...')
}
const protectEmail = email => {
  let splitEmailArr = []
  splitEmailArr = email.split('@')
  maskString(splitEmailArr[0])
  splitEmailArr[0] = maskString(splitEmailArr[0])

  return splitEmailArr.join('@')
}
console.log(protectEmail('akan@neog.camp'))
// Expected Output: ak...@neog.camp

console.log(protectEmail('akanksha@neog.camp'))
// Expected Output: akan...@neog.camp
