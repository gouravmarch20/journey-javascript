// reverse a number
const num = -123456

const revInt = num => {
  let revNum = num
    .toString()
    .split('')
    .reverse()
    .join('')

  // negative value fix
  if (revNum.endsWith('-')) {
    revNum = '-' + revNum // add negative sign
    // remove negative sign
    return parseInt(revNum)
  }
}

console.log(revInt(num))
