// - remove duplicate value
// return let of set , array  item in object form

const myArray = [1, 2, 3, 2, 2, 1, 'mili']
const myObj = {
  company: 'tencent'
}
const mySet = new Set(myArray)
mySet.add('git')
mySet.add(myObj)
mySet.delete(2)
mySet.delete('mili')

console.log(mySet)
mySet.forEach(myObj => console.log(myObj))

// ** array type
// const uniqueArray = [...mySet]
// console.log(uniqueArray)
