const toHex = (num) => {
  let res = ""
  const arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ]

  // Updated loop condition to handle negative numbers
  while (num != 0) {
    const r = num & 0xf // Equivalent to num % 16, but more efficient for bitwise operations
    res = arr[r] + res
    num >>>= 4 // Equivalent to Math.floor(num / 16), but uses bitwise right shift for efficiency
  }

  return res
}

const num = -1
console.log(toHex(num)) // Output: "ffffffff"
