const array = [
  function greeting () {
    console.log('hello')
  },
  function newGretting () {
    console.log('hello world')
  }
]
// console.log(array[0]());
// console.log(array[1]());
for (let i = 0; i < array.length; i++) {
  array[i]()
}
//  using for of loop
for (const fun of array) {
  fun()
}
