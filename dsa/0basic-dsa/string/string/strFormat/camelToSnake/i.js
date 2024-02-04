const str = 'Ii Am The Best'


const camelToSnake = (str) => {
   const strWithSpace = str.split(' ')
   const newWord = []
   for (const str of strWithSpace) {
      newWord.push(str.charAt(0).toLowerCase() + str.slice(1))
   }

   return newWord.join('_')


}
console.log(camelToSnake(str))