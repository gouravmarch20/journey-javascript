let counter = 0
let timer = setInterval(function () {
  console.log('i am an asyn')
  counter += 1
  if (counter === 5) {
    clearInterval(timer)
  }
}, 1000)
