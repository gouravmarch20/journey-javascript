const arr = [4, 66, [343]]
const arrTwo = [...arr]
arrTwo[2][0] = 'two step'
arrTwo[2] = 'the morning roof ' //! exact position require => ERROR
console.log(arr)
