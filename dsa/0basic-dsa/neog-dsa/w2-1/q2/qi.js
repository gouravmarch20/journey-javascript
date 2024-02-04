const removeTimeFormDate = str => {
  const index = str.indexOf(',')
  return str.slice(0, index)
}

console.log(removeTimeFormDate('Wed April 26,7 pm'))
