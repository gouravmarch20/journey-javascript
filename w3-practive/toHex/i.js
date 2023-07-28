const toHex = (num ,arr) => {
  let res = ""
  if(num==0) return "0";


  while (num != 0) {
    let r = num % 16
    if (r < 0) {
      r = 16 + r
    }
    // s=hex[rem]+s;
    res = arr[r] + res


    num = Math.floor(num / 16)
  }
  return res
}
const num = -1
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
console.log(toHex(num , arr))
