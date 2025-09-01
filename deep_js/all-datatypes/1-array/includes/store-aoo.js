
// 1 st array of all product , 2 nd array of user selected catergory ==> need to return his selected category item 
const arr = [
  { name: 'balbasaur', category: 'pokemon' },
  { name: 'charmander', category: 'pokemon' },
  { name: 'affle', category: 'stock' },
  { name: 'dixon', category: 'stock' },
  { name: 'vegeta', category: 'drazon-ball' }
]
const requiredCategory = ['pokemon', 'stock']
const a = arr.filter(list => requiredCategory.includes(list.category))
console.log(a)
