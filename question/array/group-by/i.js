const cars = [
   { make: 'audi', mode: 'x', price: 100 },
   { make: 'ford', mode: 'xy', price: 99 },
   { make: 'audi', mode: 'zi', price: 55 },
   { make: 'ford', mode: 'ze', price: 32 },
   { make: 'kia', mode: 'xuv', price: 44 },
]
const getGroupBy = (cars) => {
   const newObj = {}
   cars.forEach(car => {
      if (newObj.hasOwnProperty(car.make)) {
         newObj[car.make].push(car)
      } else {
         newObj[car.make] = [car]
      }
   });
   return newObj
}
console.log(getGroupBy(cars));