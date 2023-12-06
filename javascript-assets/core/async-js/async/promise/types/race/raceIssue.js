// if even one rejected then return error
const promise = Promise.race([
  new Promise((resolve, reject) => {
    reject('3 sec')
    //** if fail here it take 3 sec --> to deduct --> so if race task done in 1 sec it return no error 
    setTimeout(() => {
      reject('3 sec')
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
