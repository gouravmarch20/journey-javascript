const arr = [1, 4, 484, 5, 6]
const average = arr.reduce((a, c, i) => {
  total = a = a + c
  if (i === arr.length - 1) {
    return total / arr.length //? during it's last itteration when return trigger it's stop itteration and return than value by reducer function
  }
  return a // ? rest time it  set return value as accumulator Newvalue
}, 0)
console.log(average)
console.log(typeof average)
