// all -> take array of promise
// return all promise result in array form
let data = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2 second  ')
    }, 2000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1 second  ')
    }, 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('4 second  ')
    }, 4000)
  })
])

data.then(res => {
  console.log('then ', res)
})
