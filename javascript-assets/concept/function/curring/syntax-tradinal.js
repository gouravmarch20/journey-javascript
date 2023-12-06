
const curriedMultiple = function (a) {
  return function (b) {
    return a * b
  }
}

//
const curriedMultipleBy7 = curriedMultiple(7)
//
console.log(curriedMultipleBy7(4))
