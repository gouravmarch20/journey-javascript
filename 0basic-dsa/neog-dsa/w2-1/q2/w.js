const removeTimeFormDate = str => {
  let result = ''
  for (const value of str) {
    if (value === ',') {
      break
    }
    result += value
  }
  return result
}

console.log(removeTimeFormDate('Wed April 26,7 pm'))
