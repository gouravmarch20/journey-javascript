// return boolean , if all match condition true , else false


//! ARRAY
const array = [4 , 8 , 90 ]
console.log(array.every(i => i < 100))
// ! AOO
const arr = [
  { name: 'xeron', price: 12 },
  { name: 'goku', price: 55 },
  { name: 'vegeta', price: 77 },
  { name: 'dixon', price: 88 },
  { name: 'railtel', price: 10 }
]
const isGreaterThan10 = arr.every(item => item.price > 10)
const isGreaterThan9 = arr.every(item => item.price > 9)
console.log(isGreaterThan10)
console.log(isGreaterThan9)
// every : itterate all array -->  return true if all valid the given case  else false
const items = [
  { name: 'js', price: 200 },
  { name: 'python', price: 6200 },
  { name: 'java', price: 4200 },
  { name: 'cpp', price: 5200 },
  { name: 'mysql', price: 1200 },

];
const newItems = items.every(item => item.price <= 5000)
console.log(newItems)