const swapNo = (n1, n2) => {
  // function body
  const t = n1 ^ n2
  n1 = t ^ n1 // n1 ^ n2 ^ n1 --< n2 assign to n1
  n2 = t ^ n2 // n1 ^ n2 ^ n2 --> n1 assign to n2
  console.log(n1, n2)
}
const n1 = 4
const n2 = 7
console.log(swapNo(n1, n2))
