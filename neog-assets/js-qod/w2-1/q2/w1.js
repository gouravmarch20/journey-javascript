// argument name > dateStr not str
const removeTimeFormDate = dateStr => {
  let result = ''
  for (let i = 0; i < dateStr.length; i++) {
    if (dateStr[i] === ',') break
    result += dateStr[i]
  }
  return result
}
console.log(removeTimeFormDate('Wed April 26,7 pm'))
