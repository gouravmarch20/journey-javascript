// function calling way
// ? 1. simple
function name(params) {}
// ? 2. object function
const obj = {
  two: function () {
    return 2
  },
  // ! valid way of function
  three() {
    return 2
  },
}

// 3 . by trios  function call
function three(params) {
  return 3
}
three.call()
// 4 . by function constructor
const four = new Function("return 4")
four()
