const isAnagram = (str1, str2) => {
  const str1Length = str1.length
  const str2Length = str2.length
  if (str1Length !== str2Length) {
    return false
  }
  const str1Obj = {}
  const str2Obj = {}

  for (let i = 0; i < str1Length; i++) {
    const s1 = str1[i]
    const s2 = str2[i]
    str1Obj[s1] = (str1Obj[s1] || 0) + 1
    str2Obj[s2] = (str2Obj[s2] || 0) + 1
  }
  for (const key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false
    }
  }
  return true
}
console.log(isAnagram('abc', 'cba'))
