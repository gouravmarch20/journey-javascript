const maxOcc = (arr) => {
  let obj = {}
  //
  for (const val of arr) {
    if (obj[val]) {
      obj[val] += 1
    } else {
      obj[val] = 1
    }
  }
  //
  let maxCount = 0
  let maxOcc = ""

  for (const key in obj) {

    if (obj[key] > maxCount) {
      maxCount = obj[key]
      maxOcc = key
    }
  }
  if(! maxOcc){
    return "all eq"
  }else{
    return `${maxOcc} occur no of time ${maxCount}`
  }
}
const arr = ["a", "b", "c", "b", "a", "a"]
console.log(maxOcc(arr))
