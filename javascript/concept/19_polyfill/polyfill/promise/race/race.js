const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('three')), 110)
})
// TODO: WRONG
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 10, 'three')
// })

Promise.race([promise1, promise2, promise3]).then(
  value => console.log(value),
  function (error) {
    console.log(error)
  }
)
