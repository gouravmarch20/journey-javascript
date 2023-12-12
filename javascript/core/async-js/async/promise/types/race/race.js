
//  return only the fastest  one promise
const promise = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3 sec')
    }, 3000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1 sec')
    }, 1000)
  }),

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('5 sec')
    }, 5000)
  })
])
// ***
promise.then(res => {
  console.log(res)
})
