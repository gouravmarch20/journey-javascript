const arr = [1, 2, [[3, 4]]]

Array.prototype.flatMap = function (callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this)
    if (Array.isArray(result)) {
      newArray.push(...result)
    } else {
      newArray.push(result)
    }
  }
  return newArray
}



const result = arr.flatMap((x) => {
    if (Array.isArray(x)) {
      return x;
    } else {
      return [x * 2];
    }
  });
console.log(result) // Output: [2, 4, 6, 8]
