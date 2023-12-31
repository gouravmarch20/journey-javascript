// any : ignore the reject promise
const promise = Promise.any([
  new Promise((resolve, reject) => {
    reject('3 sec')
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
