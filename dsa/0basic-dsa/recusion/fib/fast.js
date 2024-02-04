const fib = (no) => {
  let a = 0
  let b = 1
  let num
  for (let i = 0; i < no; i++) {
    num = a + b
    a = b
    b = num
    console.log(i, b)
  }
  //   console.log(a ,b)
}
fib(5)
