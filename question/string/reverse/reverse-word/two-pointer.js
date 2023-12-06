const str = 'hello world ia'
const revSentence = s => {
  let str = ''
  for (let i = s.length - 1; i >= 0; i--) {
    const element = s[i]
    str += element
  }
  return str
}
const revWord = (s, left, right) => {
  if (!sentence || sentence.length < 2) return
  while (left < right) {
    const temp = s[left]
    s = s.slice(0, left) + s[right] + s.slice(left + 1)
    s = s.slice(0, right) + temp + s.slice(right + 1)
    left++
    right--
  }
  return s
}
const reverseWords = s => {
  let right = 0
  let left = 0
  s = revSentence(s)

  while (true) {
    while (s[left] === ' ') left++
    right = left + 1
    if (left >= s.length) break
    while (s[right] !== ' ' && right < s.length) {
      right++
    }
    s = revWord(s, left, right - 1)
    left = right
  }
  return s
}
console.log(reverseWords(str))
/**
 * time complexity : O(n)
 * space complexity : O(1)
 */