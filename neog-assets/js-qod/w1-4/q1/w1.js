function findMin (...args) {
  let min = args[0]
  for (let i = 0; i < args.length; i++) {
    if (min > args[i]) minNo = args[i]
  }
  return minNo
}
console.log(findMin(3, -12, 5, 9, 1, -9))
