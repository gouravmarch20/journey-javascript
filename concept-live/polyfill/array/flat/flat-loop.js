const arr = [1, [[[2]]], [3, 4, [5, 6]]]

Array.prototype.flat = function (depth) {
  let array = [...this]
  for (let j = 0; j < depth; j++) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      if (Array.isArray(element)) {
        arr.push(...element)
      } else {
        arr.push(element)
      }
    }
    array = [...arr]
  }
  return array
}

const flattened = arr.flat(2)
console.log(flattened) 
