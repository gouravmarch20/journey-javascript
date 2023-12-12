let result = 323
const promise = new Promise((resolve, reject) => {
  console.log('promise start')
  resolve(result)
  console.log('promise end')
})
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(result)
  })
})
result = 78
console.log('result mai new value asign')

promise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => {
    console.log('---   run  no mater what the conditon is')
  })
p1.then(res => console.log(res)).catch(err => console.log(err))
