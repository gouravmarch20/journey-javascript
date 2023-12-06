// all code executed the setInterval start so no case of stopping it
let count = 0
const timerId = setInterval(() => {
  console.log('hi', count)
  count++
}, 100)

console.log(timerId)
if (count === 5) {
  clearInterval(timerId)
}
