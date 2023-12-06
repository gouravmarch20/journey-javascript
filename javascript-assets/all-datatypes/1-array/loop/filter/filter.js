// filter return an array --> only that who had match the given case
//! ARRAY
const age = [32 , 89 , 11 , 44 , 11 , 22 ,11]
console.log(age.filter(a => a === 11))
//! AOO
const items = [
  { name: 'js', price: 200 },
  { name: 'python', price: 6200 },
  { name: 'java', price: 4200 },
  { name: 'cpp', price: 5200 },
  { name: 'mysql', price: 1200 },
  { name: 'mysql', price: 1200 },
]
const filteredItems = items.filter(item => item.price >= 5000)
const filteredCource = items.filter(item => item.name === 'mysql')
console.log(filteredItems)
console.log(filteredCource)
