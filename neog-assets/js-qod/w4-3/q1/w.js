function daysOfMonth (month) {
  switch (month.toLowerCase()) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      return true
    default:
      return false
  }
}

const month = prompt('Enter your month', '')

console.log(daysOfMonth(month))
