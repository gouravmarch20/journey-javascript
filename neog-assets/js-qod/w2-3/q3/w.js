// m1:  if (day === 'monday' ) {|| 'tuesday' || 'wednesday' || 'thursday'}
const tellWeekDayOrWeekend = day => {
    
  if (
    day === 'monday' ||
    day === 'tuesday' ||
    day === 'wednesday' ||
    day === 'thursday' ||
    day === 'friday'
  ) {
    return 'weekDay'
  } else if (day === 'saturday' || day === 'sunday') {
    return 'weekend'
  }
}
console.log(tellWeekDayOrWeekend('sunday'))
console.log(tellWeekDayOrWeekend('wednesday'))
