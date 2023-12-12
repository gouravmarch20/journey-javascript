const arr = [4, 66, [343]]
const arrTwo = JSON.parse(JSON.stringify(arr))

arrTwo[2][0] = 'two step'
console.log(arr)
