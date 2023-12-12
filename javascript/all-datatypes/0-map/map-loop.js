//
let myMap = new Map([
  ['a1', 'ajay'],
  ['a2', 'gourav'],
  ['a2', 'alpha'],
  ['a3', 'iq3']
])
myMap.delete('a3')
console.log(myMap)
for (const [key, value] of myMap) {
  console.log(`key ${key} -- ${value}`)
}

myMap.forEach((value , key) => {
  console.log(value ,'<--<', key)
});