// concat , spred both can be use
const arr = [['z', 'z1'], ['z3'], ['z4', ['z5', 'z6']]]
const levelOneFlat = arr.reduce((a, c) => {
  //   return a.concat(c)
  return [...a, ...c]
}, [])
console.log(levelOneFlat)
const levelTwoFlat = levelOneFlat.reduce((a, c) => {
  // a.concat(c)
  return [...a, ...c]
}, [])
console.log(levelTwoFlat)
