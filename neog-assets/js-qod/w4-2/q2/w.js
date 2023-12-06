const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false, 'lenght not match'
  }
  let counter = {}
  for (const iterator of str1) {
    counter[iterator] = (counter[iterator] || 0) + 1
  }

  for (const iterator of str2) {
    console.log(iterator)
    // value base test -> if value 0 return false
    if (!counter[iterator]) {
      return false
    }
    counter[iterator] = counter[iterator] - 1
    console.log(counter);
  }
  return true
}
console.log(isAnagram('hello', 'lllll'))
