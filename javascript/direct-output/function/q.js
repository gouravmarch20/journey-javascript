const base = num1 => {
  return num2 => {
    console.log(num1 + num2)
  }
}
const addSix = base(6)
addSix(10)
addSix(21)
