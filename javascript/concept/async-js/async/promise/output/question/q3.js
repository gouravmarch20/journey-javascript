// Exercise 3: Consider thirdPromise and fourthPromise for this exercise. Write code to return a promise that
// fulfills as soon as one of the promises fulfill.

const thirdPromise = new Promise((resolve, reject) => {
  resolve('Second!')
})

const fourthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('firstPromise')
  }, 2000)
})

// Promise.race([thirdPromise , fourthPromise]).then(res => console.log(res)) 
Promise.any([thirdPromise , fourthPromise]).then(res => console.log(res)) 