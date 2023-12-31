const str = 'hii , am thi iv'

const findMaxChar = str => {
  let obj = {}
  let maxRepatChar = ''
  let maxTimeItRepeat = 0
  for (const s of str) {
    obj[s] = obj[s] ? obj[s] + 1 : 1
  }
  //   console.log(obj)
  for (const [key] in obj) {
    if (key === ' ') {
      continue
    }
    if (maxTimeItRepeat < obj[key]) {
     
      maxTimeItRepeat = obj[key]
      maxRepatChar = key
    }
  }
  return [maxRepatChar , maxTimeItRepeat]
}
console.log(findMaxChar(str))
