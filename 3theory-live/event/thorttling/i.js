//implementing a throttle
function giveMeCounter(step) {
  let count = 0

  return function () {
    count = count + step
    console.log(count)
  }
}

const stepperFive = giveMeCounter(5)

stepperFive()
stepperFive()

const stepperTwo = giveMeCounter(2)

stepperTwo()
stepperTWo()

//   ## putting the power of closure to throttle
function throttle(func, delay) {
  let isTimerSet = false // private variable for this function, can't be changed from outside

  return function () {
    if (!isTimerSet) {
      func.call()
      setTimeout(() => (isTimerSet = false), delay)
      isTimerSet = true
    }
  }
}

const delay = 3000
const logger = () => console.log("abc")
const throttled = throttle(logger, delay)

console.log("test one")
throttled()
throttled()
throttled()
console.log("test two")
setTimeout(throttled, 3500)
