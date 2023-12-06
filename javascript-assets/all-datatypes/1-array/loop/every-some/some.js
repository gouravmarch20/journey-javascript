// some : return boolean if even on case match true return else false
//! Simple Array
const array = [3 , 'git' , 'go']
console.log(array.some(i => i === 3))
// ! in AOO
const arr = [
  { name: 'xeron', price: 12 },
  { name: 'goku', price: 55 },
  { name: 'vegeta', price: 77 },
  { name: 'dixon', price: 88 },
  { name: 'railtel', price: 10 }
]
const isGreaterThan100 = arr.some(item => item.price > 100)
const isGreaterThan11 = arr.some(item => item.price < 11)
console.log(isGreaterThan100)
console.log(isGreaterThan11)
