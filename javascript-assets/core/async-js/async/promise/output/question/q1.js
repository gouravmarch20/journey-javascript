// Exercise 1: Write code to return a single Promise that resolves to an array of the results.
// Expected Output: ["firstPromise", "Second!"]
//

const firstPromise = new Promise((resolve, reject) => {
  resolve('firstPromise')
})

const secondPromise = new Promise((resolve, reject) => {
  resolve('Second!')
})

Promise.all([firstPromise, secondPromise]).then(res => console.log(res))
