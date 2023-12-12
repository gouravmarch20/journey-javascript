//  allSettelled take promise in array form 
// ? return in AOO form
/*
//** it return promise in AOO form  --> status , value key -->
   -  status key have  ==> fullfill or rejected  that promise 
   - value key have  ==> value that return by the promise 
*/ 

const promise = Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1 sec')
    }, 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3 sec')
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
