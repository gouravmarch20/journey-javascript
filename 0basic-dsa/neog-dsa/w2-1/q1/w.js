// m1> asked count no char ===> char not include space but i counted it
const countNumberOfCharacter = str => {
  let count = 0
  for (const value of str) {
    if (value === ' ') {
      continue
    }
    count++
  }
  return count
}
console.log(countNumberOfCharacter('        We are neo     '))
