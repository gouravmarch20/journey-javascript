const findMax = (...args) => {
  let maxNo = args[0]
  for (let i = 0; i < args.length; i++) {
    if (maxNo < args[i]) {
      maxNo = args[i]
     
    }
  }
  return maxNo
}
console.log(findMax(3, 5, 9))
