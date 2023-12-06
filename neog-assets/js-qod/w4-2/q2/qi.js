// m1 : to array never be same
// console.log([] === []);
const isAnagram = (str1, str2) => {
  return (
    str1
      .split('')
      .sort()
      .join() ===
    str2
      .split('')
      .sort()
      .join()
  )

}

console.log(isAnagram('hello', 'hlllo'))
