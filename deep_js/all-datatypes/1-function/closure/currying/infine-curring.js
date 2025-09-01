const add = numOne => {
  return function (numTwo) {
    if (numTwo) {
      return add(numOne + numTwo)
    } else {
      return numOne
    }
  }
}
console.log(add(4)(5)(1)(9)(1)())
console.log(add(4)(5)(1)())
