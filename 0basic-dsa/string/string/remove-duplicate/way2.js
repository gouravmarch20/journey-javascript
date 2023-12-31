const str = 'bcabc'
const removeDuplicate = word => {
  const map = new Map()
  let nonDuplicatesSentence = ''
  for (const val of word) {
    if (map.has(val)) {
    } else {
      nonDuplicatesSentence += val
      map.set(val, true)
    }
  }

  return nonDuplicatesSentence
}

console.log(removeDuplicate(str))
