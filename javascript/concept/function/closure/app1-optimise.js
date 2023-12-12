function Counter () {
  var count = 0
  this.incrementCounter = function () {
    count++
    console.log(count)
  }
  this.decrementCounter = function () {
    count--
    console.log(count)
  }
}
const counter1 = new Counter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()
