Array.prototype.myReduce = function (cb) {
  let acc = 0
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i])
  }
  console.log(acc)
}

const arr = [5, 2, 4, 6]
const cb = (acc, curr) => {
  const sum = acc + curr

  console.log(sum, curr)
  return sum
}
const sum = arr.myReduce(cb)
