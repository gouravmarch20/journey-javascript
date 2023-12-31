const reverseNum = num => {
  const reverseNum = num
    .toString()
    .split('')
    .reverse()
    .join('')
  return Number(reverseNum)
}
console.log(reverseNum(3298))
