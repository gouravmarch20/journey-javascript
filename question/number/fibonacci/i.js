const fibonacci = (no) => {
  let arr = []
  for (let i = 0; i <= no; i++) {
    const element = arr[i]
    if (i < 2) {
      arr.push(i)
    }else{
      arr[i] = arr[i-1] + arr[i-2]
    }

  }
  return arr[no]
}
console.log( fibonacci(3))
