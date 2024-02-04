const str = 'i love  GreatGret'
const reverseWord = s => {
 const rev = s.split(' ').reverse().join(' ')
 return rev
}
console.log(reverseWord(str))
