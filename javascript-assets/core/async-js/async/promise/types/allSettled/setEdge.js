const promise = Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1 sec')
    }, 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('3 sec')
    }, 3000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('5 sec')
    }, 5000)
  })
])
promise.then(res => {
  console.log(res)
})
