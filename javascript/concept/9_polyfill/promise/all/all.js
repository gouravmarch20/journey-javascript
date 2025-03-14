const dummyApi = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time)
    }, time)
  })
}
const taskArray = [dummyApi(10), dummyApi(100) , dummyApi(700)]
const myPromiseAll = (taskArray) => {
  return new Promise((res, rej) => {
    const output = []
    console.log(output);
    taskArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data
          if (index === taskArray.length - 1) {
           return res(output)
          }
        })
        .catch((err) => rej(err))
    })
  })
}
myPromiseAll(taskArray)
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
