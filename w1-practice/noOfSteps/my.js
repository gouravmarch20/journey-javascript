/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let c = 0
    while (num != 0) {
      if (!(num & 1)) {
        num /= 2
      } else {
          // console.log("num")
  
        num -= 1
      }
      c++
    }
    return c
  }
  console.log(numberOfSteps(14))
  