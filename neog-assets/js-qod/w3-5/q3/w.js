const firstUniqueChar = str => {
  const obj = {}

  for (const value of str) {
    if (obj[value]) {
      obj[value]++
    } else {
      obj[value] = 1
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return key
    }
  }
  return -1
}
console.log(firstUniqueChar('kdkiiioo'))
