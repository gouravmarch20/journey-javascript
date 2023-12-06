// const promise1 = Promise.resolve(5)
// const promise2 = 'return direct value'
// const promise3 = new Promise((resolve, reject) => {
//   const foo = (value1, value2) => resolve(value1, value2)
//   setTimeout(foo, 2000, 'belive', 'xyz')
// })
const promiseReject = Promise.reject('i reject this promise')
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('3 sec')
    resolve('3 sec')
  }, 2000)
  try {
    if (true) {
      resolve(4)
    }
  } catch (error) {}
})

Promise.allSettled([p1])
  .then(value => console.log(value))
  .catch(err => console.log(err))
