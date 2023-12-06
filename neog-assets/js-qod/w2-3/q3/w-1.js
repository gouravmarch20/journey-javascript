// m1:  tolowercase not incluede
const tellWeekDayOrWeekend = day => {
  switch (day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      return 'weekDay'
    case 'saturday':
    case 'sunday':
      return 'weekend'

    default:
      return 'Day does not exists'
  }
}
console.log(tellWeekDayOrWeekend('sunday'))
console.log(tellWeekDayOrWeekend('wednesday'))
