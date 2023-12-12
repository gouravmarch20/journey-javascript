// Promise.all([take array ]) ==> return a promise that handle by .then .catch

// if last promise got rejected ==> promise, settime all run even after reject ==> because gone to webApi

// if 1 st promise get rejecte : it goes to webApi till rest all promise all send to webApi , if value direct run --> after rejection it will execute pending
const promise1 = 909
const promise2 = Promise.resolve(4)
const promise3 = new Promise((resolve, reject) => {
  const fun = messsage => {
    resolve(messsage)
  }
  setTimeout(fun, 3000, 'alpha')
})
const promise4Reject = Promise.reject('error case ')
Promise.myAll = function (values) {
  // console.log(values)
  return new Promise((resolve, reject) => {
    let completed = 0
    let results = []
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then(result => {
          console.log(result)
          completed++
          results[index] = result
          if (completed === values.length) {
            resolve(results)
          }
        })
        .catch(err => {
          console.log('catch block case')

          reject(err)
        })
    })
  })
}

Promise.myAll([promise4Reject, promise1, promise2, promise3])
  .then(values => {
    console.log(values)
  })
  .catch(err => console.log(err))
