const snakeCaseStr = 'i_am_the_best___hi';

const snakeToCamel = (str) => {
   const removeUnderScoreStr = str.split('_')
   const upperCaseFirstWord = []
   for (let i = 0; i < removeUnderScoreStr.length; i++) {
      const word = removeUnderScoreStr[i];

      // upperCaseFirstWord.push(word.slice(0, 1).toUpperCase() + word.slice(1))
      upperCaseFirstWord.push(word.charAt(0).toUpperCase() + word.slice(1))
   }
   return upperCaseFirstWord.join(" ")

}
console.log(snakeToCamel(snakeCaseStr));