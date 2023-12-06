const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve('resolve 1')
})
const promise3 = new Promise((resolve, reject) => {
  console.log(3)
  for (let i = 0; i < 10000; i++) {}
  resolve('resolve 3')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('promsie 1', promise1)
console.log('promsie 2', promise2)
console.log('promsie 3', promise3)
