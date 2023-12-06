const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  const map = new Map()

  for (const val of str1) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1)
    } else {
      map.set(val, 1)
    }
  }
  for (const val of str2) {
    if (map.has(val)) {
      map.set(val, map.get(val) - 1)
    } else {
      return false
    }
    if (map.get(val) === 0) {
      map.delete(val)
    }
  }
  return true
}

console.log(isAnagram('nagaram', 'anagram'))
