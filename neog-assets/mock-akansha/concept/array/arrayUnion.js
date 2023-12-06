// find union of array & that contain unique  value

const arrOne = [1, 'a']
const arrTwo = [1, 'z', 'b']
const arrThree = [2, 'z', 'b']

const getUnionOfArr = (arrOne, arrTwo, arrThree) => {
  const combineArray = [...arrOne, ...arrTwo, ...arrThree]
  return [...new Set(combineArray)]
}
console.log(getUnionOfArr(arrOne, arrTwo, arrThree))
