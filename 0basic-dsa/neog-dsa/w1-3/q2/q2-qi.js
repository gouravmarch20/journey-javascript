const replace = (array, replaceThis, replaceWith) => {
  const arrStrVal = array
    .join(' ')
    .replaceAll(replaceThis, replaceWith)
    .split(' ')

  return arrStrVal.map(str => Number(str))
}
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10))
