let count = 0
const timerId = setInterval(() => {
  console.log('hi', count)
  count++
  if (count === 5) {
    console.log('====')
    clearInterval(timerId)
  }
}, 100)
