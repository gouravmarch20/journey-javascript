//
const calc = {
  total: 0,
  sum: function (toAdd) {
    this.total = +toAdd
    return this // ? if not return chaning fail
  },
  sub: function (toSub) {
    this.total -= toSub
    return this // ? if not return chaning fail
  },
  mul: function (toMul) {
    this.total *= toMul
    return this // ? if not return chaning fail
  }
}

const result = calc
  .sum(5)
  .mul(3)
  .sub(5)
console.log(result.total)
