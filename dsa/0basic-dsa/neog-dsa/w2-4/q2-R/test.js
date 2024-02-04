const tokenizeDate = date => {
  let temp = ``
  let count = 0
  let tokenizedDate = {
    date: '',
    month: '',
    year: ''
  }
  for (let i = 0; i < date.length; i++) {
    if (date[i] !== `/`) temp += date[i]
    if (date[i] === `/` || i === date.length - 1) {
      ++count
      if (count === 1) {
        tokenizedDate.date = Number(temp)
      }
      if (count === 2) {
        tokenizedDate.month = Number(temp)
      }
      if (count === 3) {
        tokenizedDate.year = Number(temp)
      }
      temp = ``
    }
  }
  return tokenizedDate
}
console.log(tokenizeDate('9/02/2021'))
