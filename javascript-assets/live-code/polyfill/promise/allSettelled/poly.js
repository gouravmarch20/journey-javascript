// TODO: FIX ISSUE
const promise1 = Promise.resolve(5)
const promise2 = 'return direct value'
const promise3 = new Promise((resolve, reject) => {
  const foo = (value1, value2) => resolve(value1, value2)
  setTimeout(foo, 2000, 'belive', 'xyz')
})
const promise4 = Promise.reject('i have rejected the prom')


Promise.myAllSetelled = function (promises) {
  const mappedPromises = promises.map((promise) => {
    return Promise.resolve(promise)
      .then(value => {
        return { status: 'fulfilled', value }
      })
      .catch(reason => {
        return { status: 'rejected', reason }
      })
  })
  return Promise.all(mappedPromises)
}
Promise.myAllSetelled([Promise.resolve(33)])
  .then(promises => console.log(promises))
  .catch(err => console.log(err))
