const arr = [
  [1, 2],
  [2, 3],
]
const flatArr = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res.push(arr[i][j])
    }
  }
  return res
}
const count = (arr) => {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1
    } else {
      obj[arr[i]] = 1
    }
  }
  return obj
}
const makeDis = (obj) => {
  let res = []
  for (const key in obj) {
    if (obj[key] === 1) {
      res.push(key)
    }
  }

  return res
}
const getDst = (arr) => {
  const res = flatArr(arr)
  const obj = count(res)
  return makeDis(obj)
}
console.log(getDst(arr))
