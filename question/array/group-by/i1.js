const cars = [
   { make: 'audi', mode: 'x', price: 100 },
   { make: 'ford', mode: 'xy', price: 99 },
   { make: 'audi', mode: 'zi', price: 55 },
   { make: 'ford', mode: 'ze', price: 32 },
   { make: 'kia', mode: 'xuv', price: 44 },
]
const getGroupBy = (cars) => {
  let result =  cars.reduce((acc, currentItem) => {
      acc[currentItem.make] = acc[currentItem.make] || []
      acc[currentItem.make].push(currentItem)
      return acc
   },{})
   console.log(result);
}
getGroupBy(cars);