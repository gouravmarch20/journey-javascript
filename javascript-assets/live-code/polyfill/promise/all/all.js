const promiseOne = 909
const promiseTwo = Promise.resolve(4)
const promiseThree = new Promise((resolve, reject) => {
  const fun = messsage => {
    resolve(messsage)
  }
  setTimeout(fun, 1000, 'alpha')
})
Promise.all([promiseOne, promiseTwo, promiseThree]).then(result =>
  console.log(result)
)
