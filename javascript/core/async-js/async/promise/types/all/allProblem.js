// return error in min time it hit error ==> giving error in 3 second 
// ? no use even one error , not even tell what is the error

let data = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2 second  ')
    }, 2000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('6 second  ')
    }, 6000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('3 second  ')
    }, 3000)
  })
])

data.then(res => {
  console.log('then ', res)
})
