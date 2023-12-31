const funA = function () {
  var result = []
  for (var i = 0; i < 3; i++) {
    result.push(
      (function (j) {
        return function () {
          setTimeout(() => {
            console.log(j)
          }, 3000)
        }
      })(i)
    )
  }
  console.log(result)

  return result
}

const [r1, r2, r3] = funA()
r1() // logs 0 after 3 seconds
r2() // logs 1 after 3 seconds
r3() // logs 2 after 3 seconds
