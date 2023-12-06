const job = state => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('success')
    } else {
      reject('error')
    }
  })
}

let promise = job(true)
promise
  .then(data => {
    console.log(data)
    return job(false)
  }).then(()=>{
    console.log('will i print or ');
  })
  .catch(error => {
    console.log(error)
    return 'error caught but i will return as promise & run by '
  })
  .then(data => {
    console.log(data)
    return job(true) // unhandled promise bellow no promise done by us
  })
  .catch(err => console.log(err))
