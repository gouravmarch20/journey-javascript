const tokenizeDate = date => {
  let temp = ``
  let count = 0
  //   *** store as number
  let tokenizeDate = {
    date: '',
    month: '',
    year: ''
  }
  for (let i = 0; i < date.length; i++) {
    if (date[i] !== '/') {
      temp += date[i]
    }
    if (date[i] === `/` || i === date.length - 1) {
      ++count
      if (count === 1) {
        tokenizeDate.date = Number(temp)
      }
      if (count === 2) {
        tokenizeDate.month = Number(temp)
      }
      if (count === 3) {
        tokenizeDate.year = Number(temp)
      }
      temp = ``
    }
  }
  return tokenizeDate
}
const compareString = (str1, str2) => {
  return str1 === str2 ? 0 : str1 > str2 ? 1 : -1
}
const validateYear = year => {
  if (year < 1080) {
    return -1
  }
}
const validateMonth = month => {
  if (month <= 0 || month > 12) {
    return -1
  }
}
const validateDate = date => {
  if (date <= 0 || date > 31) {
    return -1
  }
}
// TODO: LEAP YEAR CONCEPT REVIEW
const checkIfLeapYear = year => {
  return year % 400 === 0
    ? true
    : year % 100 === 0
    ? false
    : year % 4 === 0
    ? true
    : false
}
const printGreterDate = (date1, date2) => `${date1} is greater than ${date2}`

const validateDateAsPerMonth = (date, month, year) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (date <= 31) return 1
      return -1
    case 4:
    case 6:
    case 9:
    case 11:
      if (date <= 30) return 1
      return -1
    case 2:
      return checkIfLeapYear(year) ? (date <= 29 ? 1 : -1) : date <= 28 ? 1 : -1

    default:
      break
  }
}
const findMinDate = (dateInput1, dateInput2) => {
  let firstDate = tokenizeDate(dateInput1)
  let secondDate = tokenizeDate(dateInput2)
  //
  const { date: date1, month: month1, year: year1 } = firstDate
  const { date: date2, month: month2, year: year2 } = secondDate

  //--->
  if (validateYear(year1) === -1 || validateYear(year2) === -1) {
    //   ? why
    return `invalid year `
  }
  if (validateMonth(month1) === -1 || validateMonth(month2) === -1) {
    return `Invalid Month!Month should be between 1 and 12`
  }
  if (validateDate(date1) === -1 || validateDate(date2) === -1) {
    return `Invalid Date!Date should be between 0 and 31`
  }
  // --->
  if (validateDateAsPerMonth(date1, month1, year1) === -1) {
    return `Invalid Date! date ${date1} does not exist in month ${month1} in the year ${year1}`
  }
  if (validateDateAsPerMonth(date2, month2, year2) === -1) {
    return `Invalid Date! date ${date2} does not exist in month ${month2} in the year ${year2}`
  }
  //   -->
  if (compareString(year1, year2) === 1) {
    return printGreterDate(dateInput1, dateInput2)
  } else if (compareString(year1, year2) === -1) {
    return printGreterDate(dateInput2, dateInput1)
  } else {
    if (compareString(month1, month2) === 1) {
      return printGreterDate(dateInput1, dateInput2)
    } else if (compareString(month1, month2) === -1) {
      return printGreterDate(dateInput2, dateInput1)
    } else {
      if (compareString(date1, date2) === 1) {
        return printGreterDate(dateInput1, dateInput2)
      } else if (compareString(date1, date2) === -1) {
        return printGreterDate(dateInput2, dateInput1)
      }
      //both dates are same
      else {
        return `${dateInput1} is equal to ${dateInput2}`
      }
    }
  }
}

console.log(findMinDate('24/03/2021', '24/03/2021'))
