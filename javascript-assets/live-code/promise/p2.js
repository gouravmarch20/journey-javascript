// chaning the promise ==>
const job1 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('result of job1')
    }, 2000)
  })
const job2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('result of job2')
    }, 1000)
  })
// const promise = job1()
job1()
  .then(data => {
    console.log(data)
    return 'result from promise 1 to promise 2'
  })
  .then(result => {
    console.log(result)
    return job2()
  })
  .then(data2 => {
    console.log(data2)
  })
