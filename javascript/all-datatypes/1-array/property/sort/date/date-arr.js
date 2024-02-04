
// backend sai pass 
const arr = [
  '2022-05-15T02:32:30.000Z',
  '1999-05-15T02:32:30.000Z',
  '2050-05-15T02:32:30.000Z',
  '2023-05-15T02:32:30.000Z'
]
console.log(arr.sort((date1, date2) => new Date(date1) - new Date(date2)))
