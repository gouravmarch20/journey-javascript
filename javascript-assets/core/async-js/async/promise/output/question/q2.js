// Exercise 2: Write code to return a promise that resolves after both the given promises have been fulfilled.
// It should result in an array of objects that each describes the outcome of both the promises.
// Expected Output:
// [
//   {status: "fulfilled", value: "firstPromise"},
//   {status: "fulfilled", value: "Second!"}
// ]
//

const thirdPromise = new Promise((resolve, reject) => {
  resolve('Second!')
})

const fourthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('firstPromise')
  }, 2000)
})

Promise.allSettled([thirdPromise, fourthPromise]).then(res => console.log(res))
