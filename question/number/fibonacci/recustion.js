const fibonacci = n => {
  if (n === 0 || n === 1) {
    return n
  }
  for (let i = n; i >= 0; i--) {
   return fibonacci(n - 1) + fibonacci(n -2)
  }
}
console.log(fibonacci(4))
