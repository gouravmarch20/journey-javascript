const arr = [
   { name: 'gourav', gender: 'male' },
   { name: 'ni', gender: 'girl' },
   { name: 'mo', gender: 'girl' },
   { name: 'pr', gender: 'male' },
   { name: 'pr', gender: 'male' },
   { name: 'mo', gender: 'girl' },


]
const getBoy = (arr) => {
   return arr.reduce((acc, curr) => {
      return curr.gender === 'male' ? acc = acc + 1 : acc;
   }, 0)

}

console.log(getBoy(arr));