const str = 'neog'
const arrStr = []
for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    arrStr.push(str.slice(i, j + 1))
  }
}
console.log(arrStr)
