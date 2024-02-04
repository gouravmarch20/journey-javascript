// 316. Remove Duplicate Letters

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (word) {
  const map = new Map()
  let nonDuplicatesSentence = ''
  for (const val of word) {
    if (map.has(val)) {
    } else {
      nonDuplicatesSentence += val
      map.set(val, true)
    }
  }

  return nonDuplicatesSentence.split('').sort().join('')
//   return nonDuplicatesSentence.split().sort().join()
}

console.log(removeDuplicateLetters('bcabc'))
