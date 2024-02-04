const insertString = (orignalStr, insertValue, indexNo) => {
  return (
    orignalStr.slice(0, indexNo) + insertValue + ' ' + orignalStr.slice(indexNo)
  )
}

const result = insertString(
  'We are doing some problem solving.',
  'JavaScript',
  18
)
console.log(result)
