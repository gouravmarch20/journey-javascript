// promise

// - object
// - async run
// - in webApi it run in prarity queue
// - reject / resolve

// ** it return value
// .then -> resolve .catch -> reject case .fulfill sai handle
console.log('code start => promise will pause util it pending state')
// server hitting
const promise = new Promise((resolve, reject) => {
  console.log('processing state ')
  //   ! util not return it will block it below code ==
  //   TODO: THEN HOW IT RUN ASYNCHRONOUS
  //   for (let i = 0; i < 10000; i++) {
  //     console.log('object')
  //   }
  //   resolve('resolve return this ------')
  reject('error occur')
  console.log('the promise had resolve ')
})

// ! callback queue while promise in micro task use
setTimeout(() => {
  console.log('i had been running in cb queue')
})
// ! run in cb queue
promise
  .then(data => console.log(data))

  .catch(err => console.log(err))
  .finally(() => {
    console.log('no mater what is will run')
  })
console.log('------the code has been ended --------')
