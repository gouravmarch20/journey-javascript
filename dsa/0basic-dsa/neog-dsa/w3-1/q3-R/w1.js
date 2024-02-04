const rev = function (num) {
  let reverseNum = 0
  while (num != 0) {
    reverseNum *= 10
    reverseNum += num % 10
    num -= num % 10
    num /= 10
  }
  return reverseNum
}
console.log(rev(1245));